// Global variables
let selectedPreset = null;
let isGenerating = false;
let currentVoiceSettings = {
    emotion: 50,
    speed: 1.0,
    pitch: 0
};
let currentLanguage = 'ko'; // Default to Korean

// Translation data
const translations = {
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.features': '기능',
        'nav.research': '연구',
        'nav.getStarted': '시작하기',
        
        // Hero section
        'hero.title.start': '완벽한',
        'hero.title.voice': '목소리를',
        'hero.title.end': '콘텐츠에 맞게 만들어보세요',
        'hero.subtitle': 'T2A-LoRA: 자연어 설명과 오디오 벡터를 통한 실시간 음성 적응 시스템',
        'hero.stats.faster': '빠른 적응',
        'hero.stats.zeroshot': '제로샷',
        'hero.stats.generalization': '일반화',
        'hero.stats.multimodal': '멀티모달',
        'hero.stats.control': '제어',
        
        // Demo
        'demo.title': '지금 T2A-LoRA 체험해보기',
        'demo.subtitle': '자연어를 사용하여 맞춤형 음성 특성을 생성하거나 사전 설정에서 선택하세요',
        'demo.presets.custom': '커스텀 음성 생성기',
        'demo.presets.warm': '따뜻한 내레이터',
        'demo.presets.energetic': '활기찬 젊은이',
        'demo.presets.professional': '전문적인 남성',
        'demo.presets.gentle': '부드러운 여성',
        'demo.presets.documentary': '다큐멘터리',
        'demo.voiceCharacteristics': '음성 특성',
        'demo.selectVoice': '음성 프리셋을 선택하거나 커스텀 생성',
        'demo.controls.emotion': '감정',
        'demo.controls.neutral': '중립',
        'demo.controls.speed': '속도',
        'demo.controls.pitch': '음조',
        'demo.controls.normal': '보통',
        'demo.textToConvert': '변환할 텍스트',
        'demo.textPlaceholder': '음성으로 변환할 텍스트를 여기에 입력하세요...',
        'demo.generateAudio': '오디오 생성',
        
        // Modal
        'modal.title': '커스텀 음성 생성기',
        'modal.label': '원하는 음성을 설명해주세요:',
        'modal.placeholder': '예: 약간의 영국 억양이 있는 따뜻하고 전문적인 여성 목소리, 자신감 있는 톤으로 적당한 속도로 말하는',
        'modal.examples': '예시:',
        'modal.example1': '젊은 남성의 밝고 활기찬 목소리',
        'modal.example2': '차분하고 신뢰감 있는 중년 여성의 목소리',
        'modal.example3': '부드럽고 감성적인 목소리',
        'modal.cancel': '취소',
        'modal.generate': '음성 생성',
        
        // About section
        'about.title': '음성 합성의 혁신',
        'about.description': 'T2A-LoRA는 자연어 설명을 통한 실시간 음성 적응을 가능하게 하여, 시간이 오래 걸리는 미세 조정 과정을 제거하면서도 뛰어난 품질을 유지합니다.',
        'about.features.realtime': '초 단위 실시간 생성',
        'about.features.natural': '자연어 제어',
        'about.features.multilang': '다국어 지원',
        'about.performance.speed.title': '초고속',
        'about.performance.speed.desc': '실시간 음성 적응',
        'about.performance.quality.title': '고품질',
        'about.performance.quality.desc': '품질 보존',
        'about.performance.efficiency.title': '효율적',
        'about.performance.efficiency.desc': '기존 대비 빠름',
        'about.diagram.input': '텍스트 설명',
        'about.diagram.process': '하이퍼네트워크',
        'about.diagram.output': 'LoRA 가중치',
        
        // Features
        'features.title': '강력한 기능',
        'features.subtitle': '기존 음성 합성 시스템과 차별화되는 T2A-LoRA의 고급 기능',
        'features.highlight.title': '텍스트-음성 LoRA 생성',
        'features.highlight.description': '자연어 설명에서 직접 음성 적응 가중치를 생성하는 세계 최초의 시스템입니다. 원하는 음성을 설명하면 AI가 실시간으로 생성합니다.',
        'features.highlight.voices': '가능한 음성',
        'features.highlight.input': '간단한 입력',
        'features.comparison.title': '기존 방식 vs T2A-LoRA',
        'features.comparison.setupTime': '설정 시간',
        'features.comparison.old.setupTime': '시간 단위 훈련',
        'features.comparison.new.setupTime': '초',
        'features.comparison.controlMethod': '제어 방법',
        'features.comparison.old.controlMethod': '기술적 매개변수',
        'features.comparison.new.controlMethod': '자연어',
        'features.comparison.flexibility': '유연성',
        'features.comparison.old.flexibility': '고정 프리셋',
        'features.comparison.new.flexibility': '무제한 변형',
        'features.cards.speed.title': '10배 빠른 적응',
        'features.cards.speed.description': '시간이 아닌 초 단위로 음성 적응을 달성합니다. LoRA 기반 접근 방식은 품질을 유지하면서 계산 시간을 대폭 단축합니다.',
        'features.cards.speed.realtime': '실시간',
        'features.cards.generalization.title': '제로샷 일반화',
        'features.cards.generalization.description': '훈련 중에 본 적 없는 새로운 음성 특성에 적응하여 무제한 음성 가능성과 창의적 응용을 가능하게 합니다.',
        'features.cards.generalization.ai': 'AI 기반',
        'features.cards.generalization.unlimited': '무제한',
        'features.cards.multimodal.title': '멀티모달 제어',
        'features.cards.multimodal.description': '최대한의 유연성과 정밀도를 위해 텍스트 설명과 오디오 벡터를 통해 음성 특성을 제어합니다.',
        'features.cards.multimodal.text': '텍스트 입력',
        'features.cards.multimodal.audio': '오디오 입력',
        'features.cards.multilingual.title': '다국어 지원',
        'features.cards.multilingual.description': '적응형 아키텍처를 통해 다른 언어로 확장 가능한 한국어와 영어의 기본 지원.',
        'features.cards.multilingual.korean': '한국어',
        'features.cards.multilingual.english': '영어',
        'features.cards.control.title': '세밀한 제어',
        'features.cards.control.description': '직관적인 슬라이더와 자연어 설명으로 감정, 나이, 성별, 억양, 말하기 속도, 음조를 정밀하게 제어합니다.',
        'features.cards.control.emotion': '감정',
        'features.cards.control.technical': '기술적',
        'features.cards.quality.title': '품질 보존',
        'features.cards.quality.description': '고급 신경망 기술을 통해 음성 특성을 적응시키면서 높은 오디오 품질과 화자 유사성을 유지합니다.',
        'features.cards.quality.hq': '고품질 오디오',
        'features.cards.quality.natural': '자연스러운',
        
        // Research
        'research.title': '연구 혁신',
        'research.diagram.encoder': '멀티모달 인코더',
        'research.diagram.encoderDetail': '텍스트 + 오디오 → 통합 표현',
        'research.diagram.hypernetwork': '하이퍼네트워크',
        'research.diagram.hypernetworkDetail': '동적 매개변수 생성',
        'research.diagram.lora': 'LoRA 생성',
        'research.diagram.loraDetail': '저차원 적응 가중치',
        'research.diagram.tts': 'TTS 모델',
        'research.diagram.ttsDetail': '음성 합성 출력',
        'research.specs.title': '기술 사양',
        'research.specs.architecture': '아키텍처',
        'research.specs.architectureDetail': '트랜스포머 기반 하이퍼네트워크',
        'research.specs.training': '훈련 데이터',
        'research.specs.trainingDetail': '다화자, 다국어',
        'research.specs.inference': '추론',
        'research.specs.inferenceDetail': '실시간 생성',
        'research.specs.framework': '프레임워크',
        'research.content.description': '우리의 연구는 하이퍼네트워크와 저차원 적응을 결합하여 전례 없는 음성 제어를 위한 최초의 텍스트 조건부 음성 LoRA 생성 방법론을 소개합니다.',
        'research.highlights.architecture.title': '새로운 아키텍처',
        'research.highlights.architecture.description': '자연어 이해와 음성 합성을 연결하는 최초의 텍스트 조건부 음성 LoRA 생성 시스템입니다.',
        'research.highlights.fusion.title': '멀티모달 융합',
        'research.highlights.fusion.description': '고급 트랜스포머 아키텍처와 교차 모달 어텐션 메커니즘을 통한 텍스트와 오디오 조건부의 혁신적인 통합.',
        'research.highlights.performance.title': '실시간 성능',
        'research.highlights.performance.description': '효율적인 추론 파이프라인과 사용자 상호작용 기능으로 실용적인 배포에 최적화.',
        'research.highlights.zeroshot.title': '제로샷 기능',
        'research.highlights.zeroshot.description': '강력한 표현 학습과 적응형 매개변수 생성을 통해 보지 못한 음성 특성에 일반화.',
        'research.metrics.naturalness': '자연스러움 점수',
        'research.metrics.similarity': '화자 유사성',
        'research.metrics.speed': '속도 개선',
        'research.readPaper': '연구 논문 읽기',
        'research.applications.title': '연구 응용',
        'research.applications.personalization': '개인화',
        'research.applications.accent': '억양 제어',
        'research.applications.cloning': '음성 복제',
        'research.applications.emotional': '감정 TTS',
        'research.applications.accessibility': '접근성',
        
        // Footer
        'footer.description': '혁신적인 AI 연구를 통해 음성 합성의 미래를 발전시킵니다.',
        'footer.product.title': '제품',
        'footer.product.demo': '데모',
        'footer.product.features': '기능',
        'footer.product.api': 'API',
        'footer.research.title': '연구',
        'footer.research.papers': '논문',
        'footer.research.team': '팀',
        'footer.research.publications': '출판물',
        'footer.company.title': '우리 그룹',
        'footer.company.about': '소개',
        'footer.company.contact': '연락처',
        'footer.company.careers': '채용'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.research': 'Research',
        'nav.getStarted': 'Get Started',
        
        // Hero section
        'hero.title.start': 'Create the perfect',
        'hero.title.voice': 'voice',
        'hero.title.end': 'for your content',
        'hero.subtitle': 'T2A-LoRA: Real-time voice adaptation system through natural language descriptions and audio vectors',
        'hero.stats.faster': 'Faster Adaptation',
        'hero.stats.zeroshot': 'Zero-shot',
        'hero.stats.generalization': 'Generalization',
        'hero.stats.multimodal': 'Multi-modal',
        'hero.stats.control': 'Control',
        
        // Demo
        'demo.title': 'Try T2A-LoRA Now',
        'demo.subtitle': 'Generate custom voice characteristics using natural language or select from presets',
        'demo.presets.custom': 'Custom Voice Generator',
        'demo.presets.warm': 'Warm Narrator',
        'demo.presets.energetic': 'Energetic Young',
        'demo.presets.professional': 'Professional Male',
        'demo.presets.gentle': 'Gentle Female',
        'demo.presets.documentary': 'Documentary',
        'demo.voiceCharacteristics': 'Voice Characteristics',
        'demo.selectVoice': 'Select a voice preset or create custom',
        'demo.controls.emotion': 'Emotion',
        'demo.controls.neutral': 'Neutral',
        'demo.controls.speed': 'Speed',
        'demo.controls.pitch': 'Pitch',
        'demo.controls.normal': 'Normal',
        'demo.textToConvert': 'Text to Convert',
        'demo.textPlaceholder': 'Enter your text here to convert to speech...',
        'demo.generateAudio': 'Generate Audio',
        
        // Modal
        'modal.title': 'Custom Voice Generator',
        'modal.label': 'Describe the voice you want:',
        'modal.placeholder': 'e.g., A warm, professional female voice with a slight British accent, speaking at a moderate pace with confident tone',
        'modal.examples': 'Examples:',
        'modal.example1': 'Young male with bright and energetic voice',
        'modal.example2': 'Calm and trustworthy middle-aged female voice',
        'modal.example3': 'Soft and emotional voice',
        'modal.cancel': 'Cancel',
        'modal.generate': 'Generate Voice',
        
        // About section
        'about.title': 'Revolutionizing Voice Synthesis',
        'about.description': 'T2A-LoRA enables real-time voice adaptation through natural language descriptions, eliminating time-consuming fine-tuning processes while maintaining exceptional quality.',
        'about.features.realtime': 'Real-time generation in seconds',
        'about.features.natural': 'Natural language control',
        'about.features.multilang': 'Multi-language support',
        'about.performance.speed.title': 'Ultra Fast',
        'about.performance.speed.desc': 'Real-time voice adaptation',
        'about.performance.quality.title': 'High Quality',
        'about.performance.quality.desc': 'Quality preservation',
        'about.performance.efficiency.title': 'Efficient',
        'about.performance.efficiency.desc': 'Faster than traditional',
        'about.diagram.input': 'Text Description',
        'about.diagram.process': 'Hypernetwork',
        'about.diagram.output': 'LoRA Weights',
        
        // Features
        'features.title': 'Powerful Features',
        'features.subtitle': 'Advanced capabilities that set T2A-LoRA apart from traditional voice synthesis systems',
        'features.highlight.title': 'Text-to-Voice LoRA Generation',
        'features.highlight.description': "The world's first system to generate voice adaptation weights directly from natural language descriptions. Simply describe the voice you want, and our AI creates it in real-time.",
        'features.highlight.voices': 'Possible Voices',
        'features.highlight.input': 'Simple Input',
        'features.comparison.title': 'Traditional vs T2A-LoRA',
        'features.comparison.setupTime': 'Setup Time',
        'features.comparison.old.setupTime': 'Hours of training',
        'features.comparison.new.setupTime': 'Seconds',
        'features.comparison.controlMethod': 'Control Method',
        'features.comparison.old.controlMethod': 'Technical parameters',
        'features.comparison.new.controlMethod': 'Natural language',
        'features.comparison.flexibility': 'Flexibility',
        'features.comparison.old.flexibility': 'Fixed presets',
        'features.comparison.new.flexibility': 'Unlimited variations',
        'features.cards.speed.title': '10x Faster Adaptation',
        'features.cards.speed.description': 'Achieve voice adaptation in seconds, not hours. Our LoRA-based approach dramatically reduces computation time while maintaining quality.',
        'features.cards.speed.realtime': 'Real-time',
        'features.cards.generalization.title': 'Zero-shot Generalization',
        'features.cards.generalization.description': 'Adapt to new voice characteristics never seen during training, enabling unlimited voice possibilities and creative applications.',
        'features.cards.generalization.ai': 'AI-Powered',
        'features.cards.generalization.unlimited': 'Unlimited',
        'features.cards.multimodal.title': 'Multi-modal Control',
        'features.cards.multimodal.description': 'Control voice characteristics through both text descriptions and audio vectors for maximum flexibility and precision.',
        'features.cards.multimodal.text': 'Text Input',
        'features.cards.multimodal.audio': 'Audio Input',
        'features.cards.multilingual.title': 'Multi-language Support',
        'features.cards.multilingual.description': 'Native support for Korean and English with extensibility to other languages through our adaptive architecture.',
        'features.cards.multilingual.korean': 'Korean',
        'features.cards.multilingual.english': 'English',
        'features.cards.control.title': 'Fine-grained Control',
        'features.cards.control.description': 'Precisely control emotion, age, gender, accent, speaking speed, and pitch with intuitive sliders and natural descriptions.',
        'features.cards.control.emotion': 'Emotion',
        'features.cards.control.technical': 'Technical',
        'features.cards.quality.title': 'Quality Preservation',
        'features.cards.quality.description': 'Maintain high audio quality and speaker similarity while adapting voice characteristics through advanced neural techniques.',
        'features.cards.quality.hq': 'HQ Audio',
        'features.cards.quality.natural': 'Natural',
        
        // Research
        'research.title': 'Research Innovation',
        'research.diagram.encoder': 'Multi-modal Encoder',
        'research.diagram.encoderDetail': 'Text + Audio → Unified Representation',
        'research.diagram.hypernetwork': 'Hypernetwork',
        'research.diagram.hypernetworkDetail': 'Dynamic Parameter Generation',
        'research.diagram.lora': 'LoRA Generation',
        'research.diagram.loraDetail': 'Low-Rank Adaptation Weights',
        'research.diagram.tts': 'TTS Model',
        'research.diagram.ttsDetail': 'Voice Synthesis Output',
        'research.specs.title': 'Technical Specifications',
        'research.specs.architecture': 'Architecture',
        'research.specs.architectureDetail': 'Transformer-based Hypernetwork',
        'research.specs.training': 'Training Data',
        'research.specs.trainingDetail': 'Multi-speaker, Multi-language',
        'research.specs.inference': 'Inference',
        'research.specs.inferenceDetail': 'Real-time generation',
        'research.specs.framework': 'Framework',
        'research.content.description': 'Our research introduces the first text-conditional voice LoRA generation methodology, combining hypernetworks with Low-Rank Adaptation for unprecedented voice control.',
        'research.highlights.architecture.title': 'Novel Architecture',
        'research.highlights.architecture.description': 'First-of-its-kind text-conditional voice LoRA generation system that bridges natural language understanding with voice synthesis.',
        'research.highlights.fusion.title': 'Multi-modal Fusion',
        'research.highlights.fusion.description': 'Innovative integration of text and audio conditioning through advanced transformer architectures and cross-modal attention mechanisms.',
        'research.highlights.performance.title': 'Real-time Performance',
        'research.highlights.performance.description': 'Optimized for practical deployment with efficient inference pipelines and user interaction capabilities.',
        'research.highlights.zeroshot.title': 'Zero-shot Capabilities',
        'research.highlights.zeroshot.description': 'Generalization to unseen voice characteristics through robust representation learning and adaptive parameter generation.',
        'research.metrics.naturalness': 'Naturalness Score',
        'research.metrics.similarity': 'Speaker Similarity',
        'research.metrics.speed': 'Speed Improvement',
        'research.readPaper': 'Read Research Paper',
        'research.applications.title': 'Research Applications',
        'research.applications.personalization': 'Personalization',
        'research.applications.accent': 'Accent Control',
        'research.applications.cloning': 'Voice Cloning',
        'research.applications.emotional': 'Emotional TTS',
        'research.applications.accessibility': 'Accessibility',
        
        // Footer
        'footer.description': 'Advancing the future of voice synthesis through innovative AI research.',
        'footer.product.title': 'Product',
        'footer.product.demo': 'Demo',
        'footer.product.features': 'Features',
        'footer.product.api': 'API',
        'footer.research.title': 'Research',
        'footer.research.papers': 'Papers',
        'footer.research.team': 'Team',
        'footer.research.publications': 'Publications',
        'footer.company.title': 'Our Group',
        'footer.company.about': 'About',
        'footer.company.contact': 'Contact',
        'footer.company.careers': 'Careers'
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
    updateCharacterCount();
    updateCopyrightYear();
    initializeLanguage();
    initializeRedHoverEffect();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Text input character counter
    const textInput = document.getElementById('textInput');
    if (textInput) {
        textInput.addEventListener('input', updateCharacterCount);
    }

    // Slider event listeners
    const emotionSlider = document.getElementById('emotionSlider');
    const speedSlider = document.getElementById('speedSlider');
    const pitchSlider = document.getElementById('pitchSlider');

    if (emotionSlider) {
        emotionSlider.addEventListener('input', function() {
            currentVoiceSettings.emotion = this.value;
            updateSliderValue('emotionSlider', getEmotionLabel(this.value));
        });
    }

    if (speedSlider) {
        speedSlider.addEventListener('input', function() {
            currentVoiceSettings.speed = this.value;
            updateSliderValue('speedSlider', this.value + 'x');
        });
    }

    if (pitchSlider) {
        pitchSlider.addEventListener('input', function() {
            currentVoiceSettings.pitch = this.value;
            updateSliderValue('pitchSlider', getPitchLabel(this.value));
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Character count update
function updateCharacterCount() {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    
    if (textInput && charCount) {
        const currentLength = textInput.value.length;
        charCount.textContent = currentLength;
        
        // Change color based on character count
        if (currentLength > 450) {
            charCount.style.color = '#ef4444';
        } else if (currentLength > 350) {
            charCount.style.color = '#f59e0b';
        } else {
            charCount.style.color = '#a1a1aa';
        }
    }
}

// Update copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-bottom p');
    
    if (copyrightElement) {
        if (currentYear > 2024) {
            copyrightElement.textContent = `©2024-${currentYear} LatentForge. All rights reserved.`;
        } else {
            copyrightElement.textContent = `©2024 LatentForge. All rights reserved.`;
        }
    }
}

// Slider value updates
function updateSliderValue(sliderId, value) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        const valueSpan = slider.parentElement.querySelector('.slider-value');
        if (valueSpan) {
            valueSpan.textContent = value;
        }
    }
}

function getEmotionLabel(value) {
    if (value < 20) return 'Sad';
    if (value < 40) return 'Calm';
    if (value < 60) return 'Neutral';
    if (value < 80) return 'Happy';
    return 'Excited';
}

function getPitchLabel(value) {
    if (value < -30) return 'Very Low';
    if (value < -10) return 'Low';
    if (value < 10) return 'Normal';
    if (value < 30) return 'High';
    return 'Very High';
}

// Voice preset selection
function selectPreset(presetId) {
    // Remove active class from all presets
    const presets = document.querySelectorAll('.preset-item');
    presets.forEach(preset => {
        preset.classList.remove('active');
    });

    // Add active class to selected preset
    const selectedElement = event.currentTarget;
    selectedElement.classList.add('active');
    
    selectedPreset = presetId;
    
    // Update voice display
    updateVoiceDisplay(presetId);
    
    // Update sliders based on preset
    updateSlidersForPreset(presetId);
}

function updateVoiceDisplay(presetId) {
    const voiceDisplay = document.querySelector('.voice-preview');
    if (!voiceDisplay) return;

    const presetData = getPresetData(presetId);
    
    voiceDisplay.innerHTML = `
        <i class="fas fa-microphone"></i>
        <div>
            <div style="font-weight: 600; color: #ffffff;">${presetData.name}</div>
            <div style="font-size: 0.9rem; color: #a1a1aa;">${presetData.description}</div>
        </div>
    `;
}

function getPresetData(presetId) {
    const presets = {
        'warm-narrator': {
            name: 'Warm Narrator',
            description: 'Gentle, storytelling voice with warmth',
            emotion: 65,
            speed: 0.9,
            pitch: -5
        },
        'energetic-young': {
            name: 'Energetic Young',
            description: 'Upbeat, youthful voice with energy',
            emotion: 85,
            speed: 1.2,
            pitch: 10
        },
        'professional-male': {
            name: 'Professional Male',
            description: 'Confident, authoritative business voice',
            emotion: 45,
            speed: 1.0,
            pitch: -10
        },
        'gentle-female': {
            name: 'Gentle Female',
            description: 'Soft, caring voice with elegance',
            emotion: 60,
            speed: 0.8,
            pitch: 5
        },
        'documentary': {
            name: 'Documentary',
            description: 'Clear, informative narration style',
            emotion: 40,
            speed: 0.9,
            pitch: 0
        }
    };
    
    return presets[presetId] || {
        name: 'Unknown',
        description: 'Custom voice preset',
        emotion: 50,
        speed: 1.0,
        pitch: 0
    };
}

function updateSlidersForPreset(presetId) {
    const presetData = getPresetData(presetId);
    
    // Update sliders
    const emotionSlider = document.getElementById('emotionSlider');
    const speedSlider = document.getElementById('speedSlider');
    const pitchSlider = document.getElementById('pitchSlider');
    
    if (emotionSlider) {
        emotionSlider.value = presetData.emotion;
        updateSliderValue('emotionSlider', getEmotionLabel(presetData.emotion));
    }
    
    if (speedSlider) {
        speedSlider.value = presetData.speed;
        updateSliderValue('speedSlider', presetData.speed + 'x');
    }
    
    if (pitchSlider) {
        pitchSlider.value = presetData.pitch;
        updateSliderValue('pitchSlider', getPitchLabel(presetData.pitch));
    }
    
    // Update current settings
    currentVoiceSettings = {
        emotion: presetData.emotion,
        speed: presetData.speed,
        pitch: presetData.pitch
    };
}

// Custom voice generator modal
function openCustomGenerator() {
    const modal = document.getElementById('customModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Focus on textarea
        const textarea = document.getElementById('customDescription');
        if (textarea) {
            setTimeout(() => textarea.focus(), 100);
        }
    }
}

function closeCustomGenerator() {
    const modal = document.getElementById('customModal');
    if (modal) {
        modal.style.display = 'none';
        
        // Clear textarea
        const textarea = document.getElementById('customDescription');
        if (textarea) {
            textarea.value = '';
        }
    }
}

function addExample(text) {
    const textarea = document.getElementById('customDescription');
    if (textarea) {
        textarea.value = text;
        textarea.focus();
    }
}

function generateCustomVoice() {
    const description = document.getElementById('customDescription').value.trim();
    
    if (!description) {
        const alertMessage = currentLanguage === 'ko' ? 
            '음성 설명을 입력해주세요.' : 
            'Please enter a voice description.';
        alert(alertMessage);
        return;
    }
    
    // Simulate custom voice generation
    const loadingMessage = currentLanguage === 'ko' ? 
        '커스텀 음성 생성 중...' : 
        'Generating custom voice...';
    showLoadingState(loadingMessage);
    
    setTimeout(() => {
        // Remove active class from all presets
        const presets = document.querySelectorAll('.preset-item');
        presets.forEach(preset => {
            preset.classList.remove('active');
        });
        
        // Mark custom generator as active
        const customGenerator = document.querySelector('.custom-generator');
        if (customGenerator) {
            customGenerator.classList.add('active');
        }
        
        // Update voice display with custom description
        const voiceDisplay = document.querySelector('.voice-preview');
        if (voiceDisplay) {
            const customLabel = currentLanguage === 'ko' ? '커스텀 음성' : 'Custom Voice';
            voiceDisplay.innerHTML = `
                <i class="fas fa-magic"></i>
                <div>
                    <div style="font-weight: 600; color: #ffffff;">${customLabel}</div>
                    <div style="font-size: 0.9rem; color: #a1a1aa;">${description}</div>
                </div>
            `;
        }
        
        // Set random realistic values for demo
        const randomSettings = {
            emotion: Math.floor(Math.random() * 60) + 20,
            speed: Math.round((Math.random() * 1 + 0.5) * 10) / 10,
            pitch: Math.floor(Math.random() * 40) - 20
        };
        
        updateSlidersForPreset('custom');
        Object.assign(currentVoiceSettings, randomSettings);
        
        hideLoadingState();
        closeCustomGenerator();
        
        selectedPreset = 'custom';
        
    }, 2000);
}

// Audio generation
function generateAudio() {
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    
    if (!textInput || !generateBtn) return;
    
    const text = textInput.value.trim();
    
    if (!text) {
        const alertMessage = currentLanguage === 'ko' ? 
            '변환할 텍스트를 입력해주세요.' : 
            'Please enter text to convert.';
        alert(alertMessage);
        return;
    }
    
    if (!selectedPreset) {
        const alertMessage = currentLanguage === 'ko' ? 
            '음성 특성을 선택해주세요.' : 
            'Please select voice characteristics.';
        alert(alertMessage);
        return;
    }
    
    if (isGenerating) return;
    
    isGenerating = true;
    
    // Update button state
    generateBtn.disabled = true;
    const generatingText = currentLanguage === 'ko' ? 
        '생성 중...' : 
        'Generating...';
    generateBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        ${generatingText}
    `;
    
    // Simulate audio generation
    setTimeout(() => {
        // Show audio output
        const audioOutput = document.getElementById('audioOutput');
        if (audioOutput) {
            audioOutput.style.display = 'flex';
            
            // In a real implementation, you would set the audio source
            // audioOutput.querySelector('audio source').src = generatedAudioUrl;
        }
        
        // Reset button state
        generateBtn.disabled = false;
        const generateText = currentLanguage === 'ko' ? 
            '오디오 생성' : 
            'Generate Audio';
        generateBtn.innerHTML = `
            <i class="fas fa-play"></i>
            ${generateText}
        `;
        
        isGenerating = false;
        
        // Show success message
        const successMessage = currentLanguage === 'ko' ? 
            '음성이 성공적으로 생성되었습니다!' : 
            'Audio generated successfully!';
        showNotification(successMessage, 'success');
        
    }, 3000);
}

// Utility functions
function showLoadingState(message) {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.id = 'loadingOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        backdrop-filter: blur(10px);
    `;
    
    overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem; color: #6366f1;"></i>
            <div style="font-size: 1.1rem; font-weight: 500;">${message}</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

function hideLoadingState() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 500;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle" style="margin-right: 0.5rem;"></i>
        ${message}
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for scroll animations with in/out effects
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is entering viewport
                entry.target.classList.add('visible');
            } else {
                // Element is leaving viewport
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Modal event listeners
document.addEventListener('click', function(e) {
    const modal = document.getElementById('customModal');
    if (e.target === modal) {
        closeCustomGenerator();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCustomGenerator();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Smooth scrolling polyfill for older browsers
function smoothScrollTo(target) {
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Progress bars animation for About section
function setupProgressBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is entering viewport - animate progress bars
                const fills = entry.target.querySelectorAll('.performance-fill');
                fills.forEach(fill => {
                    setTimeout(() => {
                        fill.classList.add('animate');
                    }, 500);
                });
            } else {
                // Element is leaving viewport - reset progress bars
                const fills = entry.target.querySelectorAll('.performance-fill');
                fills.forEach(fill => {
                    fill.classList.remove('animate');
                });
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const performanceGrid = document.querySelector('.performance-grid-horizontal');
    if (performanceGrid) {
        observer.observe(performanceGrid);
    }
}

// Initialize progress bars when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    setupProgressBars();
    initializeRedHoverEffect();
});

// Red hover effect mouse tracking
function initializeRedHoverEffect() {
    const hoverElements = document.querySelectorAll('.technical-details, .research-diagram, .hero-demo, .demo-panel, .tech-diagram, .feature-highlight, .feature-comparison');
    
    hoverElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        });
        
        element.addEventListener('mouseleave', function() {
            element.style.setProperty('--mouse-x', '50%');
            element.style.setProperty('--mouse-y', '50%');
        });
    });
}

// Language Support Functions
function initializeLanguage() {
    // Set default language based on browser or saved preference
    const savedLang = localStorage.getItem('language') || 'ko';
    currentLanguage = savedLang;
    
    // Update HTML lang attribute
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
        htmlRoot.setAttribute('lang', currentLanguage);
    }
    
    updateLanguageButtons();
    translatePage();
}

function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    
    // Update HTML lang attribute
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
        htmlRoot.setAttribute('lang', language);
    }
    
    updateLanguageButtons();
    translatePage();
    updatePlaceholders();
}

function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if ((btn.id === 'langKo' && currentLanguage === 'ko') || 
            (btn.id === 'langEn' && currentLanguage === 'en')) {
            btn.classList.add('active');
        }
    });
}

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.textContent = translation;
        }
    });
}

function updatePlaceholders() {
    // Update placeholders that have data-i18n-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update default text content based on language
    const textInput = document.getElementById('textInput');
    if (textInput && currentLanguage === 'en') {
        textInput.value = 'Hello! Try creating natural speech using T2A-LoRA.';
    } else if (textInput && currentLanguage === 'ko') {
        textInput.value = '안녕하세요! T2A-LoRA를 사용하여 자연스러운 음성을 생성해보세요.';
    }
    
    // Update character count after changing text
    updateCharacterCount();
}

// Make language switching functions globally accessible
window.switchLanguage = switchLanguage;
