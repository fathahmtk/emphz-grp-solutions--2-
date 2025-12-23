import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        // This basic test ensures the main App component mounts successfully
        // It verifies that no immediate runtime errors occur on initialization
        const { container } = render(<App />);
        expect(container).toBeTruthy();
    });
});
