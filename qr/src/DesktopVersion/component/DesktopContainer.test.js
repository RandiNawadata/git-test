// src/components/DesktopContainer.test.js
import { render, screen } from '@testing-library/react';
import DesktopContainer from './DesktopContainer';
import { containerJSON } from '../style/style';

// Mock the containerJSON import
jest.mock('../style/style', () => ({
  containerJSON: {
    containerBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'hsl(212, 45%, 89%)',
      padding: 0,
    },
    imageContainerBoxStyle: {
      width: 320,
      height: 499,
      backgroundColor: 'hsl(0, 0%, 100%)',
      textAlign: 'center',
      borderRadius: '16px',
    },
  },
}));

describe('DesktopContainer Component', () => {
  it('renders children inside the container', () => {
    render(
      <DesktopContainer>
        <div>Test Child</div>
      </DesktopContainer>
    );

    // Check if the child component is rendered inside DesktopContainer
    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
  });

  it('applies correct styles from containerJSON', () => {
    render(
      <DesktopContainer>
        <div>Test Child</div>
      </DesktopContainer>
    );

    // Query the DesktopContainer by its data-testid
    const containerElement = screen.getByTestId('desktop-container');
    
    // Check if the container has the correct styles applied
    expect(containerElement).toHaveStyle('display: flex');
    expect(containerElement).toHaveStyle('justify-content: center');
    expect(containerElement).toHaveStyle('align-items: center');
    expect(containerElement).toHaveStyle('height: 100vh');
    expect(containerElement).toHaveStyle('background-color: hsl(212, 45%, 89%)');
    
    // Query the inner image container and check its styles
    const imageContainerElement = screen.getByTestId('image-container');
    expect(imageContainerElement).toHaveStyle('width: 320px');
    expect(imageContainerElement).toHaveStyle('height: 499px');
    expect(imageContainerElement).toHaveStyle('background-color: hsl(0, 0%, 100%)');
  });
});
