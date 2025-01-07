/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import '@testing-library/jest-dom';

import React from 'react'
import { render, screen } from '@testing-library/react';
import { ExpandableMenuButton } from 'Entain/components/expandable-menu-button';
import { Home as HomeIcon } from '@mui/icons-material';
//#endregion

describe('<ExpandableMenuButton />', () => {
  it('renders button with correct text', () => {
    render(<ExpandableMenuButton text='Test Button' icon={<HomeIcon />} onClick={() => {}} />);

    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ExpandableMenuButton text='Test Button' icon={<HomeIcon />} onClick={handleClick} />);

    const button = screen.getByText('Test Button');
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
