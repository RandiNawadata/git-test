// src/DesktopPage.test.js
import { render, screen } from '@testing-library/react';
import DesktopPage from './DesktopPage';

// Mock the child components
jest.mock('./component/DesktopContainer', () => ({ children }) => <div>{children}</div>);
jest.mock('./component/ImageComponent', () => () => <div>ImageComponent</div>);
jest.mock('./component/TextComponent', () => () => <div>TextComponent</div>);

describe('DesktopPage Component', () => {
  it('renders DesktopContainer with ImageComponent and TextComponent', () => {
    render(<DesktopPage />);

    // Check if DesktopContainer is rendered
    const containerElement = screen.getByText(/ImageComponent/i);
    expect(containerElement).toBeInTheDocument();

    // Check if ImageComponent is rendered inside DesktopContainer
    expect(screen.getByText(/ImageComponent/i)).toBeInTheDocument();

    // Check if TextComponent is rendered inside DesktopContainer
    expect(screen.getByText(/TextComponent/i)).toBeInTheDocument();
  });
});
