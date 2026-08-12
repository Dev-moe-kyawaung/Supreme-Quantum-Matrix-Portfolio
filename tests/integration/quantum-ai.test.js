const QuantumAIConcierge = require('../../js/quantum-ai-engine');

describe('Quantum AI Concierge', () => {
    let ai;
    
    beforeEach(() => {
        ai = new QuantumAIConcierge();
    });

    test('should generate project info response', () => {
        const response = ai.generateResponse('Show me projects');
        expect(response).toContain('Quantum Chat');
        expect(response).toContain('Compose Universe');
    });

    test('should generate skill info response', () => {
        const response = ai.generateResponse('What are your skills?');
        expect(response).toContain('Kotlin');
        expect(response).toContain('Jetpack Compose');
    });
});
