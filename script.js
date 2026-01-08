// سنة الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// ساعة إلكترونية
function updateClock(){
  const now=new Date();
  const hh=String(now.getHours()).padStart(2,'0');
  const mm=String(now.getMinutes()).padStart(2,'0');
  const ss=String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clockTime').textContent=`${hh}:${mm}:${ss}`;
}
setInterval(updateClock,1000);

// ترجمة بسيط
let currentLang='ar';
document.getElementById('translateBtn').addEventListener('click',()=>{
  currentLang=currentLang==='ar'?'en':'ar';
  document.body.dir=currentLang==='ar'?'rtl':'ltr';
  document.getElementById('translateBtn').textContent=currentLang==='ar'?'ترجمة':'Translate';
});

// نموذج التواصل
const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  status.textContent=currentLang==='ar'?'تم إرسال رسالتك بنجاح':'Message sent successfully';
  form.reset();
});
