// بيانات المشاريع (9 مشاريع)
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

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', (event) => {
    displayProjects();
});
