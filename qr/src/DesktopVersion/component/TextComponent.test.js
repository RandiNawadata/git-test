// src/components/TextComponent.test.js
import { render, screen } from '@testing-library/react';
import TextComponent from './TextComponent';

// Mock the textJSON import
jest.mock('../style/style', () => ({
  textJSON: {
    textDiv: {
      width: '288px',
      height: '131px',
      padding: '0px 16px 40px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    textStyles: {
      padding: '0px 16px 0px 16px',
    },
    text1Style: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '120%',
      color: 'hsl(218, 44%, 22%)',
    },
    text2Style: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 'regular',
      fontSize: '15px',
      lineHeight: '140%',
      color: 'hsl(216, 15%, 48%)',
    },
  },
}));

// Mock the text content (you should replace these with actual text values in your app)
jest.mock('../../Text/Text.js', () => ({
  text1: 'Sample Text 1',
  text2: 'Sample Text 2',
}));

describe('TextComponent', () => {
  it('renders text1 and text2 correctly', () => {
    render(<TextComponent />);

    // Check if text1 and text2 are rendered
    expect(screen.getByText(/Sample Text 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Sample Text 2/i)).toBeInTheDocument();
  });

  it('applies correct styles to text1 and text2', () => {
    render(<TextComponent />);

    // Check if text1 has the correct styles
    const text1Element = screen.getByTestId('text1Style-test');
    expect(text1Element).toHaveStyle('font-family: Outfit, sans-serif');
    expect(text1Element).toHaveStyle('font-weight: bold');
    expect(text1Element).toHaveStyle('font-size: 22px');
    expect(text1Element).toHaveStyle('line-height: 120%');
    expect(text1Element).toHaveStyle('color: hsl(218, 44%, 22%)');

    // Check if text2 has the correct styles
    const text2Element = screen.getByTestId('text2Style-test');
    expect(text2Element).toHaveStyle('font-family: Outfit, sans-serif');
    expect(text2Element).toHaveStyle('font-weight: regular');
    expect(text2Element).toHaveStyle('font-size: 15px');
    expect(text2Element).toHaveStyle('line-height: 140%');
    expect(text2Element).toHaveStyle('color: hsl(216, 15%, 48%)');
  });
});
