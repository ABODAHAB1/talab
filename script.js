function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText =
        now.toLocaleDateString('ar-EG') + ' | ' + now.toLocaleTimeString('ar-EG');
}
setInterval(updateClock, 1000);
updateClock();

function goWeb() {
    document.getElementById('web-services').classList.remove('hidden');
}

function order(plan, price) {
    document.getElementById('order-form').classList.remove('hidden');
    const select = document.getElementById('planSelect');
    select.innerHTML = <option>${plan} - ${price} جنيه</option>;
}

function showOffer() {
    document.getElementById('offer').classList.toggle('hidden');
}
