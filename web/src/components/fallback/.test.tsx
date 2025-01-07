/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import '@testing-library/jest-dom';

import React from 'react'
import { render, screen } from '@testing-library/react';
import { Fallback } from 'Entain/components/fallback';
//#endregion

describe('<Fallback />', () => {
  it('renders fallback with correct message', () => {
    render(<Fallback message='Test Message' />);

    const fallback = screen.getByText('Test Message');
    expect(fallback).toBeInTheDocument();
  });

  it('renders fallback with correct icon', () => {
    render(<Fallback message='Test Message' showIcon={ false } />);

    const fallback = screen.queryByText('🐒');
    expect(fallback).not.toBeInTheDocument();
  });
});
