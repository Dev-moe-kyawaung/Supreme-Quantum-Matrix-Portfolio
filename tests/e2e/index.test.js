const { test, expect } = require('@playwright/test');

test('Quantum portfolio loads correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    
    // Check if hero section is visible
    const heroTitle = await page.textContent('.quantum-hero-title');
    expect(heroTitle).toContain('MOE KYAW AUNG');
    
    // Check if AI Concierge exists
    const aiWidget = await page.getByRole('button', { name: /AI/i });
    expect(aiWidget).toBeVisible();
    
    // Check navigation
    await page.click('text=PROJECTS');
    await page.waitForSelector('.project-quantum-card');
    expect(await page.isVisible('.project-quantum-card')).toBe(true);
});
