// Internationalization (i18n) System
const translations = {
    ko: {
        'nav.about': '소개',
        'nav.projects': '프로젝트',
        'nav.research': '연구',
        'nav.team': '팀',
        'nav.github': 'GitHub',
        
        'hero.badge': 'Generative AI Research Group',
        'hero.title.start': 'Forging the Future of',
        'hero.title.ai': 'Artificial Intelligence',
        'hero.title.end': 'through Innovation',
        'hero.subtitle': '차세대 생성형 AI 기술을 선도하는 연구 그룹으로, 잠재 공간(Latent Space)의 깊이 있는 탐구를 통해 멀티모달 AI 시스템의 새로운 패러다임을 제시합니다.',
        'hero.exploreProjects': '프로젝트 탐색',
        'hero.viewGithub': 'GitHub에서 보기',
        'hero.stats.projects': '활성 프로젝트',
        'hero.stats.possibilities': '가능성',
        'hero.stats.opensource': '오픈 소스',
        
        'about.title': 'LatentForge 소개',
        'about.subtitle': '우리는 생성형 AI의 잠재 공간을 탐구하며 혁신적인 연구와 프로젝트를 통해 AI의 경계를 확장해나갑니다.',
        'about.research.title': '연구 초점',
        'about.research.description': '고차원 잠재 공간의 구조적 특성을 분석하고, 이를 기반으로 한 차세대 멀티모달 생성 시스템을 연구개발합니다.',
        'about.opensource.title': '오픈 소스',
        'about.opensource.description': '투명하고 협력적인 연구 문화를 통해 모든 성과를 오픈소스로 공개하며, 글로벌 AI 커뮤니티와 지식을 공유합니다.',
        'about.innovation.title': '혁신',
        'about.innovation.description': '모델 정렬 및 융합 기술을 통해 AI 시스템의 성능과 효율성을 획기적으로 향상시키는 혁신적 솔루션을 개발합니다.',
        
        'projects.title': '우리의 프로젝트',
        'projects.subtitle': '혁신적인 AI 기술을 통해 실용적이고 창의적인 솔루션을 개발합니다.',
        'projects.status.active': '활성',
        'projects.status.planning': '계획 중',
        'projects.t2a.description': 'Text-to-Audio LoRA: 자연어 설명을 통한 실시간 음성 적응 시스템. 기존의 시간이 오래 걸리는 미세 조정 과정을 제거하고 초 단위로 음성 특성을 생성합니다.',
        'projects.omni.description': '다양한 모달리티의 AI 모델들을 효율적으로 병합하여 통합된 멀티모달 시스템을 구축하는 연구 프로젝트입니다.',
        'projects.viewProject': '프로젝트 보기',
        'projects.comingSoon': '곧 출시',
        
        'research.title': '연구 분야',
        'research.subtitle': 'AI 기술의 근본적인 이해와 혁신을 통해 새로운 가능성을 탐구합니다.',
        'research.latent.title': 'Latent Space 연구',
        'research.latent.description': '다차원 잠재 공간의 구조와 특성을 분석하여 효율적인 표현 학습과 생성 모델 개발을 연구합니다.',
        'research.multimodal.title': '멀티모달 생성',
        'research.multimodal.description': '텍스트, 이미지, 오디오 등 다양한 모달리티를 통합하는 옴니모달 생성 시스템을 개발합니다.',
        'research.alignment.title': '모델 정렬 & 병합',
        'research.alignment.description': '서로 다른 AI 모델들을 효과적으로 정렬하고 병합하여 성능을 향상시키는 기법을 연구합니다.',
        'research.diffusion.title': 'Diffusion 모델',
        'research.diffusion.description': 'Diffusion 기반 생성 모델의 이론과 응용을 연구하여 고품질 콘텐츠 생성을 실현합니다.',
        
        'team.title': '팀',
        'team.subtitle': 'AI 연구에 대한 열정과 전문성을 갖춘 연구자들이 모여 차세대 AI 기술의 혁신을 이끌어갑니다.',
        'team.join.title': '연구에 참여하기',
        'team.join.description': 'LatentForge와 함께 인공지능의 미래를 설계하고 싶으신가요? 우리는 AI 연구에 대한 비전과 열정을 가진 연구자 및 개발자를 찾고 있습니다.',
        'team.contribute': 'GitHub에서 기여하기',
        
        'footer.description': '첨단 생성형 AI 연구 그룹. 잠재 공간 탐구를 통한 혁신적 AI 기술 개발로 인공지능의 새로운 패러다임을 제시합니다.',
        'footer.projects.title': '프로젝트',
        'footer.projects.t2a': 'T2A-LoRA',
        'footer.projects.omni': '옴니모달 병합',
        'footer.research.title': '연구',
        'footer.research.areas': '연구 분야',
        'footer.research.papers': '논문',
        'footer.community.title': '커뮤니티',
        'footer.community.github': 'GitHub',
        'footer.community.team': '팀'
    },
    en: {
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.research': 'Research',
        'nav.team': 'Team',
        'nav.github': 'GitHub',
        
        'hero.badge': 'Generative AI Research Group',
        'hero.title.start': 'Forging the Future of',
        'hero.title.ai': 'Artificial Intelligence',
        'hero.title.end': 'through Innovation',
        'hero.subtitle': 'A leading research group in next-generation generative AI technology, presenting new paradigms for multimodal AI systems through deep exploration of Latent Space.',
        'hero.exploreProjects': 'Explore Projects',
        'hero.viewGithub': 'View on GitHub',
        'hero.stats.projects': 'Active Projects',
        'hero.stats.possibilities': 'Possibilities',
        'hero.stats.opensource': 'Open Source',
        
        'about.title': 'About LatentForge',
        'about.subtitle': 'We explore the latent space of generative AI and expand the boundaries of AI through innovative research and projects.',
        'about.research.title': 'Research Focus',
        'about.research.description': 'We analyze structural characteristics of high-dimensional latent spaces and research next-generation multimodal generation systems.',
        'about.opensource.title': 'Open Source',
        'about.opensource.description': 'Through transparent and collaborative research culture, we open-source all achievements and share knowledge with the global AI community.',
        'about.innovation.title': 'Innovation',
        'about.innovation.description': 'We develop innovative solutions that dramatically improve AI system performance and efficiency through model alignment and fusion technologies.',
        
        'projects.title': 'Our Projects',
        'projects.subtitle': 'We develop practical and creative solutions through innovative AI technology.',
        'projects.status.active': 'Active',
        'projects.status.planning': 'Planning',
        'projects.t2a.description': 'Text-to-Audio LoRA: Real-time voice adaptation system through natural language description. Eliminates time-consuming fine-tuning processes and generates voice characteristics in seconds.',
        'projects.omni.description': 'A research project to efficiently merge AI models of various modalities to build an integrated multimodal system.',
        'projects.viewProject': 'View Project',
        'projects.comingSoon': 'Coming Soon',
        
        'research.title': 'Research Areas',
        'research.subtitle': 'We explore new possibilities through fundamental understanding and innovation of AI technology.',
        'research.latent.title': 'Latent Space Research',
        'research.latent.description': 'We analyze the structure and characteristics of multi-dimensional latent spaces to research efficient representation learning and generative model development.',
        'research.multimodal.title': 'Multi-modal Generation',
        'research.multimodal.description': 'We develop omni-modal generation systems that integrate various modalities such as text, images, and audio.',
        'research.alignment.title': 'Model Alignment & Merging',
        'research.alignment.description': 'We research techniques to effectively align and merge different AI models to improve performance.',
        'research.diffusion.title': 'Diffusion Models',
        'research.diffusion.description': 'We research the theory and application of diffusion-based generative models to realize high-quality content generation.',
        
        'team.title': 'Our Team',
        'team.subtitle': 'Researchers with passion and expertise in AI research come together to lead innovation in next-generation AI technology.',
        'team.join.title': 'Join Our Research',
        'team.join.description': 'Want to design the future of artificial intelligence with LatentForge? We are looking for researchers and developers with vision and passion for AI research.',
        'team.contribute': 'Contribute on GitHub',
        
        'footer.description': 'Advanced Generative AI Research Group. Presenting new paradigms in artificial intelligence through innovative AI technology development via latent space exploration.',
        'footer.projects.title': 'Projects',
        'footer.projects.t2a': 'T2A-LoRA',
        'footer.projects.omni': 'Omni-modal Merging',
        'footer.research.title': 'Research',
        'footer.research.areas': 'Research Areas',
        'footer.research.papers': 'Papers',
        'footer.community.title': 'Community',
        'footer.community.github': 'GitHub',
        'footer.community.team': 'Team'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'ko';

// Apply translations
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.add('active');
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate elements on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.about-card, .project-card, .research-area').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Apply initial language
    applyTranslations(currentLanguage);
    
    // Initialize features
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    
    // Add interactive effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
});

// Particle animation enhancement
function createParticles() {
    const particleSystem = document.querySelector('.particle-system');
    if (!particleSystem) return;
    
    // Add more particles dynamically
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particleSystem.appendChild(particle);
    }
}

// Call particle creation after DOM load
document.addEventListener('DOMContentLoaded', createParticles);
