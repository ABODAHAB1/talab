// بيانات المشاريع (9 مشاريع مع وصف بأسلوب "أنا صممته")
const projects =;

// وظيفة لعرض المشاريع في الصفحة تلقائياً
function displayProjects() {
    const portfolioGrid = document.getElementById('portfolio-items');
    projects.forEach(project => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('portfolio-item');
        itemDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="portfolio-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(itemDiv);
    });
}

// وظيفة لجعل الانتقال بين الأقسام سلساً
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// وظيفة تحديث الساعة الرقمية الحية
function updateClock() {
    const clockElement = document.getElementById('liveClock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        clockElement.innerText = `الوقت الحالي: ${timeString}`;
    }
}

// وظيفة تبديل اللغة
function toggleLanguage() {
    const body = document.body;
    body.classList.toggle('en');
    if (body.classList.contains('en')) {
        body.dir = 'ltr';
        document.title = 'Aboueldehab Services - Professional Web Design';
        // يمكنك إضافة المزيد من ترجمة النصوص الثابتة هنا يدوياً
    } else {
        body.dir = 'rtl';
        document.title = 'خدمات ابوالدهب - تصميم مواقع احترافي';
    }
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', (event) => {
    displayProjects();
    setInterval(updateClock, 1000); // تحديث الساعة كل ثانية
    updateClock(); // تحديث فوري عند التحميل
});
