/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavigationButton } from 'Entain/components/navigation/button';
import { Home as HomeIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
//#endregion

const mockRoute: NavigationMenuItem = {
  name: 'Home',
  link: { url: '/home', as: '/home' },
  dataCy: 'home-button',
  icon: <HomeIcon />
};

const theme = createTheme();

describe('<NavigationButton />', () => {
  const renderWithTheme = (ui: React.ReactElement) => render(<ThemeProvider theme={ theme }>{ ui }</ThemeProvider>);

  it('renders button with correct text and icon', () => {
    renderWithTheme(<NavigationButton route={ mockRoute } />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('home-button')).toBeInTheDocument();
  });

  it('renders only icon on small screens when showOnlyIconsOnSmallScreens is true', () => {
    // Mock small screen
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true, // This simulates a small screen
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    renderWithTheme(<NavigationButton route={ mockRoute } showOnlyIconsOnSmallScreens={ true } />);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.getByTestId('home-button')).toBeInTheDocument();
  });

  it('renders with custom listItemSx styles', () => {
    const customSx = { backgroundColor: 'rgb(255, 0, 0)' };

    renderWithTheme(<NavigationButton route={ mockRoute } listItemSx={ customSx } />);

    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
  });

  it('renders link with correct href', () => {
    renderWithTheme(<NavigationButton route={ mockRoute } />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/home');
  });
});
