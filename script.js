// ===== إعدادات عامة =====
const BOT_TOKEN = "8770754568:AAExYFyI88GA8J3adDv1s6YL6ZVYtabxkb8"; // للاختبار المحلي فقط
const PRIVATE_CHAT_ID = 8223130191;
const CHANNEL_USERNAME = "@AaNnAn2"; // اختياري

// لو عايز تستخدم دالة Serverless بدل الإرسال المباشر ضع true
const USE_SERVERLESS = true;
const FRONTEND_SEND_ENDPOINT = "/.netlify/functions/sendMessage"; // عدّل لو مسارك مختلف

// ===== API إعدادات =====
const COIN_ID = "the-open-network";
const COINGECKO_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_ID}&vs_currencies=usd`;
const USD_EGP_URL = "https://api.exchangerate.host/latest?base=USD&symbols=EGP";

// ===== عناصر DOM =====
const cardsEl = document.getElementById("cards");
const statusEl = document.getElementById("status");
const refreshBtn = document.getElementById("refresh-btn");
const sendBtn = document.getElementById("send-btn");
const autoSendCheckbox = document.getElementById("auto-send");

// ===== حالة التطبيق =====
let lastFetched = { tonUSD: null, tonEGP: null };
let selectedPriceUSD = null;
let autoSendIntervalId = null;

// ===== دوال العرض =====
function renderTonCard(usd, egp) {
  const usdText = usd !== null ? Number(usd).toLocaleString(undefined,{maximumFractionDigits:6}) + " $" : "—";
  const egpText = egp !== null ? Number(egp).toLocaleString(undefined,{maximumFractionDigits:2}) + " ج.م" : "—";

  cardsEl.innerHTML = `
    <div class="card">
      <h2>Toncoin (TON)</h2>
      <div id="ton-usd" class="price-usd">${usdText}</div>
      <div class="price-egp">${egpText}</div>
    </div>
  `;

  const usdEl = document.getElementById("ton-usd");
  if (!usdEl) return;

  // إبراز الاختيار لو موجود
  if (selectedPriceUSD !== null) {
    usdEl.classList.add("selected");
    usdEl.innerText = Number(selectedPriceUSD).toLocaleString(undefined,{maximumFractionDigits:6}) + " $";
  } else {
    usdEl.classList.remove("selected");
  }

  // حدث النقر للاختيار/إلغاء الاختيار
  usdEl.onclick = () => {
    if (!usdEl.classList.contains("selected")) {
      if (lastFetched.tonUSD !== null) {
        selectedPriceUSD = lastFetched.tonUSD;
        usdEl.classList.add("selected");
        usdEl.innerText = Number(selectedPriceUSD).toLocaleString(undefined,{maximumFractionDigits:6}) + " $";
        statusEl.innerText = `تم اختيار سعر التون: ${selectedPriceUSD} $`;
      } else {
        statusEl.innerText = "لا يوجد سعر حالي للاختيار";
      }
    } else {
      selectedPriceUSD = null;
      usdEl.classList.remove("selected");
      usdEl.innerText = lastFetched.tonUSD !== null ? Number(lastFetched.tonUSD).toLocaleString(undefined,{maximumFractionDigits:6}) + " $" : "—";
      statusEl.innerText = "تم إلغاء اختيار السعر";
    }
  };
}

// ===== جلب السعر =====
async function getTonPrice() {
  try {
    statusEl.innerText = "جاري جلب سعر TON...";
    const [coinResp, fxResp] = await Promise.all([fetch(COINGECKO_URL), fetch(USD_EGP_URL)]);
    if (!coinResp.ok) throw new Error(`CoinGecko HTTP ${coinResp.status}`);
    if (!fxResp.ok) throw new Error(`FX HTTP ${fxResp.status}`);

    const coinData = await coinResp.json();
    const fxData = await fxResp.json();
    const usdToEgp = fxData?.rates?.EGP ?? null;

    const tonUSD = coinData[COIN_ID]?.usd ?? null;
    const tonEGP = (tonUSD !== null && usdToEgp !== null) ? (tonUSD * usdToEgp) : null;

    lastFetched.tonUSD = tonUSD;
    lastFetched.tonEGP = tonEGP;

    renderTonCard(tonUSD, tonEGP);
    statusEl.innerText = "تم التحديث " + new Date().toLocaleTimeString();
    console.log("getTonPrice:", { tonUSD, tonEGP });
    return { tonUSD, tonEGP };
  } catch (err) {
    console.error("getTonPrice error:", err);
    renderTonCard(null, null);
    statusEl.innerText = "خطأ في جلب السعر — افتح Console للمزيد";
    return null;
  }
}

// ===== إرسال واحد (يحاول Serverless أولاً ثم مباشر كاحتياط) =====
async function sendTonToBotOnce() {
  try {
    const priceToSend = selectedPriceUSD !== null ? selectedPriceUSD : lastFetched.tonUSD;
    if (priceToSend === null) {
      console.warn("no price to send");
      return { ok:false, reason:"no_price" };
    }
    const messageText = `سعر التون الحالي: ${priceToSend} $`;

    // 1) Serverless
    if (USE_SERVERLESS) {
      try {
        const resp = await fetch(FRONTEND_SEND_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: messageText, sendToChannel: false })
        });
        const text = await resp.text();
        let json;
        try { json = JSON.parse(text); } catch(e) { json = { raw: text }; }
        if (!resp.ok) {
          console.error("Serverless HTTP error:", resp.status, json);
          return { ok:false, reason:"serverless_http", status:resp.status, body:json };
        }
        if (!json.ok) {
          console.error("Serverless response error:", json);
          return { ok:false, reason:"serverless_response", body:json };
        }
        return { ok:true, via:"serverless", body:json };
      } catch (err) {
        console.warn("Serverless exception, will try direct send:", err);
        // نكمل للمحاولة المباشرة
      }
    }

    // 2) إرسال مباشر من المتصفح (احتياطي)
    try {
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: PRIVATE_CHAT_ID, text: messageText })
      });
      const j = await r.json().catch(e => ({ parseError:true, raw:null }));
      if (!r.ok || !j.ok) {
        console.error("Direct send failed:", r.status, j);
        return { ok:false, reason:"direct_failed", status:r.status, body:j };
      }
      return { ok:true, via:"direct", body:j };
    } catch (err) {
      console.error("Direct send exception:", err);
      return { ok:false, reason:"direct_exception", details: err.message || String(err) };
    }
  } catch (err) {
    console.error("sendTonToBotOnce exception:", err);
    return { ok:false, reason:"exception", details: err.message || String(err) };
  }
}

// ===== الإرسال التلقائي =====
async function autoSendTick() {
  // نجلب السعر ثم نحاول الإرسال
  await getTonPrice();
  const res = await sendTonToBotOnce();
  if (res.ok) {
    statusEl.innerText = `✅ تم إرسال السعر تلقائيًا (${res.via}) — ${new Date().toLocaleTimeString()}`;
    console.log("autoSend success:", res);
  } else {
    // عرض سبب مفصل
    let msg = "فشل الإرسال التلقائي";
    if (res.reason) msg += ` — ${res.reason}`;
    if (res.details) msg += `: ${res.details}`;
    statusEl.innerText = msg;
    console.warn("autoSendTick result:", res);
  }
}

function startAutoSend(intervalMs = 60_000) {
  if (autoSendIntervalId) clearInterval(autoSendIntervalId);
  // تنفيذ فوري ثم كل فترة
  autoSendTick();
  autoSendIntervalId = setInterval(autoSendTick, intervalMs);
  statusEl.innerText = "التحديث والإرسال التلقائي مفعل كل دقيقة";
}

function stopAutoSend() {
  if (autoSendIntervalId) clearInterval(autoSendIntervalId);
  autoSendIntervalId = null;
  statusEl.innerText = "التحديث التلقائي متوقف";
}

// ===== أحداث =====
refreshBtn.addEventListener("click", getTonPrice);
sendBtn.addEventListener("click", async () => {
  statusEl.innerText = "جاري إرسال السعر المختار/الأخير...";
  const r = await sendTonToBotOnce();
  if (r.ok) statusEl.innerText = "✅ تم إرسال السعر يدوياً";
  else {
    let msg = "فشل الإرسال اليدوي";
    if (r.reason) msg += ` — ${r.reason}`;
    if (r.details) msg += `: ${r.details}`;
    statusEl.innerText = msg;
    console.warn("manual send result:", r);
  }
});

if (autoSendCheckbox) {
  autoSendCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) startAutoSend(60_000);
    else stopAutoSend();
  });
}

// ===== تشغيل أولي =====
getTonPrice();
