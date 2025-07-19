// Global variables
let selectedPreset = null;
let isGenerating = false;
let currentVoiceSettings = {
    emotion: 50,
    speed: 1.0,
    pitch: 0
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
    updateCharacterCount();
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
        alert('음성 설명을 입력해주세요.');
        return;
    }
    
    // Simulate custom voice generation
    showLoadingState('Generating custom voice...');
    
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
            voiceDisplay.innerHTML = `
                <i class="fas fa-magic"></i>
                <div>
                    <div style="font-weight: 600; color: #ffffff;">Custom Voice</div>
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
        alert('변환할 텍스트를 입력해주세요.');
        return;
    }
    
    if (!selectedPreset) {
        alert('음성 특성을 선택해주세요.');
        return;
    }
    
    if (isGenerating) return;
    
    isGenerating = true;
    
    // Update button state
    generateBtn.disabled = true;
    generateBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Generating...
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
        generateBtn.innerHTML = `
            <i class="fas fa-play"></i>
            Generate Audio
        `;
        
        isGenerating = false;
        
        // Show success message
        showNotification('음성이 성공적으로 생성되었습니다!', 'success');
        
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
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
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
