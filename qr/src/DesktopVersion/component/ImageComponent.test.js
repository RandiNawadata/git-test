// src/components/ImageComponent.test.js
import { render, screen } from '@testing-library/react';
import ImageComponent from './ImageComponent';

// Mock the imageJSON import
jest.mock('../style/style', () => ({
  imageJSON: {
    imageDiv: {
      width: "288px",
      height: "288px",
      borderRadius: "8px",
      padding: "16px 16px 16px 16px",
    },
    imageStyle: {
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      backgroundColor: "blue",
    },
  },
}));

describe('ImageComponent', () => {
  it('renders the image with the correct src and alt attributes', () => {
    render(<ImageComponent />);

    const imageElement = screen.getByTestId('qr-image');
    
    // Check if the image has the correct src and alt attributes
    expect(imageElement).toHaveAttribute('src', 'image-qr-code.png');
    expect(imageElement).toHaveAttribute('alt', 'qr-code-component');
  });

  it('applies the correct styles to the image container and image', () => {
    render(<ImageComponent />);

    // Check if the image container has the correct styles
    const imageContainer = screen.getByTestId('image-container');
    expect(imageContainer).toHaveStyle('width: 288px');
    expect(imageContainer).toHaveStyle('height: 288px');
    expect(imageContainer).toHaveStyle('border-radius: 8px');
    expect(imageContainer).toHaveStyle('padding: 16px 16px 16px 16px');

    // Check if the image has the correct styles
    const imageElement = screen.getByTestId('qr-image');
    expect(imageElement).toHaveStyle('width: 100%');
    expect(imageElement).toHaveStyle('height: 100%');
    expect(imageElement).toHaveStyle('border-radius: 8px');
    expect(imageElement).toHaveStyle('background-color: blue');
  });
});
