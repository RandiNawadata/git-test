import { render, screen } from '@testing-library/react';
import App from './App';
import { useMediaQuery, useTheme } from '@mui/material';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn(),
  useTheme: jest.fn(),
}));

jest.mock('./DesktopVersion/DesktopPage.js', () => () => <div>DesktopPage</div>);
jest.mock('./MobileVersion/MobilePage.js', () => () => <div>MobilePage</div>);

describe('App Component', () => {
  it('renders DesktopPage when screen is large (desktop view)', () => {
    useTheme.mockReturnValue({ breakpoints: { up: () => 'lg' } });
    useMediaQuery.mockReturnValue(true); 

    render(<App />);
    
    expect(screen.getByText(/DesktopPage/i)).toBeInTheDocument();
  });

  it('renders MobilePage when screen is small (mobile view)', () => {
    useTheme.mockReturnValue({ breakpoints: { up: () => 'lg' } });
    useMediaQuery.mockReturnValue(false);

    render(<App />);
    
    expect(screen.getByText(/MobilePage/i)).toBeInTheDocument();
  });
});
