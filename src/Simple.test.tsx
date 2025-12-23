import { describe, it, expect } from 'vitest';

describe('Environment', () => {
    it('has window and navigator', () => {
        expect(typeof window).not.toBe('undefined');
        expect(typeof navigator).not.toBe('undefined');
    });
});
