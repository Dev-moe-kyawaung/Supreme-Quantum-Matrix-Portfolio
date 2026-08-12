// ============ QUANTUM AI CONCIERGE ENGINE ============

class QuantumAIConcierge {
    constructor() {
        this.conciergeBody = document.getElementById('conciergeBody');
        this.initialize();
        this.bindEvents();
        this.loadTrainingData();
    }

    initialize() {
        this.context = {
            developer: {
                name: "Moe Kyaw Aung",
                role: "Senior Android Architect",
                experience: "12+ years",
                email: "moekyawaung@programmer.net",
                phone: "+95 9 889 000 889",
                products: 3000,
                location: "Bangkok, Thailand"
            },
            skills: this.getSkills(),
            projects: this.getProjects()
        };
        
        this.learningMessages = [
            "Processing quantum queries...",
            "Accessing neural networks...",
            "Consulting quantum database...",
            "Crunching data in superposition..."
        ];
    }

    getSkills() {
        return [
            { name: "Kotlin", level: 98 },
            { name: "Compose", level: 95 },
            { name: "MVVM", level: 92 },
            { name: "Clean Architecture", level: 94 },
            { name: "Jetpack Compose", level: 93 },
            { name: "Firebase", level: 90 },
            { name: "Coroutines", level: 96 },
            { name: "Android SDK", level: 99 }
        ];
    }

    getProjects() {
        return [
            { title: "Quantum Chat", description: "Real-time messaging app with quantum encryption", tag: "featured" },
            { title: "Magma Analytics", description: "Data analytics dashboard with AI insights", tag: "featured" },
            { title: "Compose Universe", description: "Compose UI library for rapid development", tag: "open-source" },
            { title: "Neural Weather App", description: "AI-powered weather prediction", tag: "ai" }
        ];
    }

    bindEvents() {
        document.getElementById('conciergeInput').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleUserInput(e.target.value);
        });

        document.getElementById('conciergeSend').addEventListener('click', () => {
            const input = document.getElementById('conciergeInput').value;
            this.handleUserInput(input);
        });

        this.bindSuggestedQuestions();
    }

    bindSuggestedQuestions() {
        document.querySelectorAll('.suggest-q').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleUserInput(btn.textContent);
            });
        });
    }

    handleUserInput(input) {
        if (!input.trim()) return;
        this.addMessage('user', input);
        this.showTyping();
        
        setTimeout(() => {
            this.hideTyping();
            const response = this.generateResponse(input);
            this.addMessage('ai', response);
        }, this.getThinkingTime());
    }

    generateResponse(input) {
        const lowerInput = input.toLowerCase();
        
        const responsePatterns = {
            'project': () => this.getProjectInfo(),
            'skill': () => this.getSkillInfo(),
            'experience': () => this.getExperienceInfo(),
            'contact': () => this.getContactInfo(),
            'email': () => this.getContactInfo(),
            'phone': () => this.getContactInfo(),
            'hello': () => "Hello! Welcome to the quantum realm. How can I assist you?",
            'hi': () => "Hi there! Ready to explore quantum possibilities?",
            'kotlin': () => this.getSkillInfo('Kotlin'),
            'compose': () => this.getSkillInfo('Jetpack Compose'),
            'ai': () => "AI is my passion! I integrate machine learning into Android apps for smart, adaptive experiences.",
            'architecture': () => "I specialize in Clean Architecture and MVVM patterns for robust, scalable mobile solutions.",
            'default': () => "I'm not sure about that. Ask me about my skills, projects, experience, or how to contact me."
        };

        for (const [key, handler] of Object.entries(responsePatterns)) {
            if (lowerInput.includes(key)) {
                return handler();
            }
        }

        return responsePatterns['default']();
    }

    getProjectInfo() {
        const projects = this.context.projects;
        let response = "Here are my notable projects:\n\n";
        projects.slice(0, 3).forEach(project => {
            response += `• **${project.title}**: ${project.description}\n`;
        });
        response += "\nWant to see more? Ask for details or visit my GitHub!";
        return response;
    }

    getSkillInfo(skillName = null) {
        const skills = this.context.skills;
        
        if (skillName) {
            const skill = skills.find(s => s.name === skillName);
            if (skill) return `My proficiency in ${skill.name} is ${skill.level}% - advanced level!`;
        }
        
        return `I'm proficient in ${skills.length} key technologies, including: ${skills.slice(0, 5).map(s => `${s.name} (${s.level}%)`).join(', ')}. What would you like to know more about?`;
    }

    getExperienceInfo() {
        return `I have ${this.context.developer.experience} of experience in mobile development, having shipped ${this.context.developer.products}+ apps. I've worked across diverse industries from social media to fintech, always pushing the boundaries of what's possible on Android.`;
    }

    getContactInfo() {
        return `You can reach me through:\n📧 Email: ${this.context.developer.email}\n📱 Phone: ${this.context.developer.phone}\n📍 Location: ${this.context.developer.location}\n\nOr through my social links below!`;
    }

    addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `concierge-message ${type}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.innerHTML = type === 'ai' ? '<i class="fas fa-hat-wizard"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'msg-content';
        content.textContent = text;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.conciergeBody.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTyping() {
        const typingDiv = document.getElementById('aiTyping');
        if (typingDiv) {
            typingDiv.style.display = 'block';
            this.scrollToBottom();
        }
    }

    hideTyping() {
        const typingDiv = document.getElementById('aiTyping');
        if (typingDiv) {
            typingDiv.style.display = 'none';
        }
    }

    scrollToBottom() {
        this.conciergeBody.scrollTop = this.conciergeBody.scrollHeight;
    }

    getThinkingTime() {
        return Math.random() * 1000 + 500;
    }

    loadTrainingData() {
        // Load additional training data
        console.log('🤖 Quantum AI Concierge trained successfully');
    }
}

// Initialize AI Concierge
document.addEventListener('DOMContentLoaded', () => {
    const concierge = new QuantumAIConcierge();
});
