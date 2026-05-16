// ========================================
// ABO DAHAB - Futuristic Portfolio Script
// ========================================

class FuturisticPortfolio {
    constructor() {
        this.currentLang = 'en';
        this.serviceDetails = this.getServiceDetails();
        this.init();
    }

    init() {
        this.initWelcomeSequence();
        this.initCustomCursor();
        this.initParticles();
        this.initLanguageSystem();
        this.initNavbarScroll();
        this.initServiceModals();
        this.initAIChatbot();
        this.initScrollAnimations();
        this.initStatsCounter();
        this.initContactForm();
        this.initTypingEffect();
        this.initHeroTitleAnimation();
    }

    // Welcome Sequence
    initWelcomeSequence() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const loadingScreen = document.getElementById('loading-screen');
        const mainContainer = document.getElementById('main-container');
        if (!welcomeScreen || !loadingScreen || !mainContainer) return;

        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.classList.remove('hidden');
                this.startLoading();
            }, 1000);
        }, 4000);
    }

    startLoading() {
        const loadingText = document.querySelector('.loading-text');
        const loadingScreen = document.getElementById('loading-screen');
        const mainContainer = document.getElementById('main-container');
        if (!loadingText || !loadingScreen || !mainContainer) return;

        const loadingTexts = [
            'INITIALIZING NEURAL NETWORK',
            'COMPILING QUANTUM ALGORITHMS',
            'DEPLOYING CYBER DEFENSES',
            'SYNCING GLOBAL SERVERS',
            'SYSTEM READY'
        ];

        let step = 0;
        const interval = setInterval(() => {
            loadingText.textContent = loadingTexts[step % loadingTexts.length];
            step++;
        }, 600);

        setTimeout(() => {
            clearInterval(interval);
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                mainContainer.classList.remove('hidden');
                mainContainer.classList.add('visible');
                this.startScrollAnimations();
            }, 800);
        }, 4000);
    }

    startScrollAnimations() {
        // Reuse scroll animations hook
        this.initScrollAnimations();
    }

    // Custom Cursor
    initCustomCursor() {
        const cursor = document.getElementById('custom-cursor');
        const trail = document.getElementById('cursor-trail');
        if (!cursor || !trail) return;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';

            trail.style.transition = 'none';
            setTimeout(() => {
                trail.style.transition = 'all 0.1s ease';
            }, 50);
        });

        document.querySelectorAll('a, button, .service-card, .prog-service, .platform-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)';
            });
        });
    }

    // Particle System
    initParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles = [];
        const particleCount = 100;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'cyan';
                ctx.restore();
            }
        }

        for (let i = 0; i < particleCount; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener('resize', resize);
    }

    // Language System
    initLanguageSystem() {
        const langBtns = document.querySelectorAll('.lang-btn');
        if (!langBtns.length) return;

        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget?.dataset?.lang;
                if (lang) this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        document.body.classList.toggle('ar', lang === 'ar');
        this.currentLang = lang;

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all translatable content
        document.querySelectorAll('[data-en]').forEach(el => {
            const text = lang === 'en' ? el.dataset.en : el.dataset.ar;
            if (!text) return;

            const tag = el.tagName.toUpperCase();
            if (tag === 'INPUT' || tag === 'TEXTAREA') {
                const ph = lang === 'en' ? el.dataset.enPlaceholder : el.dataset.arPlaceholder;
                if (ph) el.placeholder = ph;
                return;
            }

            if (tag === 'SELECT') {
                el.querySelectorAll('option').forEach(opt => {
                    const optText = lang === 'en' ? opt.dataset.en : opt.dataset.ar;
                    if (optText) opt.textContent = optText;
                });
                return;
            }

            if (tag === 'BUTTON') {
                el.textContent = text;
                return;
            }

            el.textContent = text;
        });
    }

    // Service Details
    getServiceDetails() {
        // Used by modals. Keys should match data-service values.
        return {
            programming: {
                titleEn: 'Programming',
                titleAr: 'البرمجة',
                descriptionEn: 'Full stack and AI-ready solutions.',
                descriptionAr: 'حلول كاملة ومناسبة للذكاء الاصطناعي.',
                featuresEn: ['Web Apps', 'APIs', 'AI Systems'],
                featuresAr: ['تطبيقات ويب', 'واجهات API', 'أنظمة ذكاء اصطناعي'],
                techEn: ['JavaScript', 'Node.js', 'Python'],
                techAr: ['جافاسكريبت', 'Node.js', 'بايثون']
            },
            social: {
                titleEn: 'Social Media Empire',
                titleAr: 'إمبراطورية السوشيال ميديا',
                descriptionEn: 'Verification and growth services for major platforms.',
                descriptionAr: 'خدمات التحقق والنمو للمنصات الكبرى.',
                featuresEn: ['Verification', 'Followers', 'Likes'],
                featuresAr: ['التحقق', 'متابعين', 'إعجابات'],
                techEn: ['Strategy', 'Content', 'Analytics'],
                techAr: ['استراتيجية', 'محتوى', 'تحليل']
            },
            cybersecurity: {
                titleEn: 'Cybersecurity Fortress',
                titleAr: 'حصن الأمن السيبراني',
                descriptionEn: 'Advanced protection and security assessments.',
                descriptionAr: 'حماية متقدمة وتقييمات أمنية.',
                featuresEn: ['Pen Testing', 'Firewall', 'Encryption'],
                featuresAr: ['اختبار اختراق', 'جدار ناري', 'تشفير'],
                techEn: ['Hardening', 'Monitoring', 'Reports'],
                techAr: ['تحسين', 'مراقبة', 'تقارير']
            },
            fullstack: {
                titleEn: 'Full Stack Development',
                titleAr: 'تطوير Full Stack',
                descriptionEn: 'End-to-end web development with clean architecture.',
                descriptionAr: 'تطوير ويب من البداية للنهاية مع معمارية نظيفة.',
                featuresEn: ['Frontend', 'Backend', 'Deployment'],
                featuresAr: ['واجهة أمامية', 'خلفية', 'نشر'],
                techEn: ['React', 'Node.js', 'SQL'],
                techAr: ['React', 'Node.js', 'SQL']
            },
            frontend: {
                titleEn: 'Front-End Development',
                titleAr: 'تطوير الواجهة الأمامية',
                descriptionEn: 'Modern UI with smooth animations and performance.',
                descriptionAr: 'واجهة حديثة مع حركات سلسة وأداء عالي.',
                featuresEn: ['UI/UX', 'Animations', 'Accessibility'],
                featuresAr: ['تصميم', 'حركات', 'إتاحة'],
                techEn: ['HTML', 'CSS', 'JavaScript'],
                techAr: ['HTML', 'CSS', 'JavaScript']
            }
        };
    }

    // Navbar Scroll
    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const onScroll = () => {
            if (window.scrollY > 10) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Service Modals
    initServiceModals() {
        const modal = document.getElementById('service-modal');
        if (!modal) return;
        const modalClose = modal.querySelector('.modal-close');

        const serviceTitle = modal.querySelector('.service-title');
        const serviceDescription = modal.querySelector('.service-description');
        const serviceFeatures = modal.querySelector('.service-features');
        const serviceTech = modal.querySelector('.service-tech');

        const open = (serviceKey) => {
            const detail = this.serviceDetails[serviceKey] || this.serviceDetails.programming;
            const isAr = this.currentLang === 'ar';

            if (serviceTitle) serviceTitle.textContent = isAr ? detail.titleAr : detail.titleEn;
            if (serviceDescription) serviceDescription.textContent = isAr ? detail.descriptionAr : detail.descriptionEn;

            const renderItems = (arr) => (arr || [])
                .map(item => `<div style="padding:10px 12px;border:1px solid var(--glass-border);border-radius:14px;">${item}</div>`)
                .join('');

            if (serviceFeatures) {
                const list = isAr ? detail.featuresAr : detail.featuresEn;
                serviceFeatures.innerHTML = `<h4 style="color: var(--neon-cyan); margin-bottom:15px;">Features</h4>${renderItems(list)}`;
            }

            if (serviceTech) {
                const list = isAr ? detail.techAr : detail.techEn;
                serviceTech.innerHTML = `<h4 style="color: var(--neon-cyan); margin-bottom:15px;">Tech</h4>${renderItems(list)}`;
            }

            modal.classList.add('active');
        };

        document.querySelectorAll('[data-service], .service-card, .prog-service, .platform-card').forEach(card => {
            card.addEventListener('click', () => {
                const key = card.dataset.service;
                if (key) open(key);
            });
        });

        if (modalClose) modalClose.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // AI Chatbot (simple local demo)
    initAIChatbot() {
        const chatbot = document.getElementById('ai-chatbot');
        if (!chatbot) return;

        const closeBtn = chatbot.querySelector('.chatbot-close');
        const input = chatbot.querySelector('.chatbot-input input');
        const sendBtn = chatbot.querySelector('.send-btn');
        const messages = chatbot.querySelector('.chatbot-messages');

        const pushMessage = (text, cls) => {
            if (!messages) return;
            const el = document.createElement('div');
            el.className = `message ${cls}`;
            el.innerHTML = `<div class="message-content">${text}</div>`;
            messages.appendChild(el);
            messages.scrollTop = messages.scrollHeight;
        };

        const botReply = (userText) => {
            const t = (userText || '').toLowerCase();
            if (t.includes('ai') || t.includes('ذكاء') || t.includes('اصطناع')) {
                return this.currentLang === 'ar'
                    ? 'تقدر تطلب مني: تصميم نموذج، أو اقتراح بنية مشروع AI.'
                    : 'You can ask me about model design or project architecture.';
            }
            if (t.includes('cyber') || t.includes('security') || t.includes('أمن') || t.includes('اختراق')) {
                return this.currentLang === 'ar'
                    ? 'أقدر أساعدك بخطة حماية وتشخيص مخاطر.'
                    : 'I can help with a security hardening plan and risk assessment.';
            }
            return this.currentLang === 'ar'
                ? 'تم. اكتب لي التفاصيل وسأقترح الحل.'
                : 'Got it. Share details and I’ll suggest a solution.';
        };

        const send = () => {
            const text = input ? input.value.trim() : '';
            if (!text) return;
            pushMessage(text, 'user-message');
            if (input) input.value = '';
            setTimeout(() => pushMessage(botReply(text), 'bot-message'), 300);
        };

        if (sendBtn) sendBtn.addEventListener('click', send);
        if (input) input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') send();
        });

        if (closeBtn) closeBtn.addEventListener('click', () => chatbot.classList.remove('active'));

        setTimeout(() => chatbot.classList.add('active'), 1500);
    }

    // Scroll Animations
    initScrollAnimations() {
        const start = () => {
            document.querySelectorAll('.fade-in-up').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) el.classList.add('visible');
            });
        };
        window.addEventListener('scroll', start, { passive: true });
        start();
    }

    // Stats Counter
    initStatsCounter() {
        const statEls = document.querySelectorAll('.stat-number[data-target]');
        if (!statEls.length) return;

        const animateStat = (el) => {
            const target = parseFloat(el.dataset.target);
            if (Number.isNaN(target)) return;

            const isInt = Number.isInteger(target);
            const startVal = 0;
            const duration = 1800;
            const startTime = performance.now();

            const tick = (now) => {
                const t = Math.min(1, (now - startTime) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                const value = startVal + (target - startVal) * eased;
                el.textContent = isInt ? Math.round(value).toString() : value.toFixed(1);
                if (t < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    if (!el.dataset.animated) {
                        el.dataset.animated = '1';
                        animateStat(el);
                    }
                }
            });
        }, { threshold: 0.4 });

        statEls.forEach(el => observer.observe(el));
    }

    // Contact Form
    initContactForm() {
        const form = document.querySelector('form.contact-form');
        const notification = document.getElementById('success-notification');
        if (!form || !notification) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            notification.classList.add('active');
            setTimeout(() => notification.classList.remove('active'), 2800);
            form.reset();
        });
    }

    // Typing Effect
    initTypingEffect() {
        const el = document.querySelector('.typing-text');
        if (!el) return;

        const strings = this.currentLang === 'ar'
            ? ['تم تطوير حلولنا بعناية']
            : ['Full Stack • AI • Cybersecurity • Digital Services'];

        let idx = 0;
        let charIdx = 0;
        let deleting = false;

        const tick = () => {
            const current = strings[idx % strings.length];

            if (!deleting) {
                el.textContent = current.slice(0, charIdx++);
                if (charIdx >= current.length) {
                    deleting = true;
                    setTimeout(tick, 800);
                    return;
                }
            } else {
                el.textContent = current.slice(0, Math.max(0, charIdx--));
                if (charIdx <= 0) deleting = false;
            }

            setTimeout(tick, deleting ? 45 : 55);
        };

        tick();
    }

    // Hero title animation hook
    initHeroTitleAnimation() {
        // CSS handles it via .char animation
    }
}

// Boot
window.addEventListener('DOMContentLoaded', () => {
    window.__futuristicPortfolio = new FuturisticPortfolio();
});

