const QuantumEngine = require('../../js/quantum-engine');

describe('Quantum Engine', () => {
    let engine;
    
    beforeEach(() => {
        engine = new QuantumEngine();
    });

    test('should initialize correctly', () => {
        expect(engine.version).toBe('5.0.0');
    });

    test('should have global state', () => {
        expect(engine.getGlobalState()).toHaveProperty('particles');
        expect(engine.getGlobalState()).toHaveProperty('projects');
    });

    test('should support quantum calculations', async () => {
        const result = await engine.quantumCalculation();
        expect(result).toHaveProperty('result');
    });
});
