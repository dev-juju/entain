'use client';

/**
 * Users end up here if they request an unknown endpoint/page
 *
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box } from '@mui/material';
import { Fallback } from 'Entain/components/fallback';
import Link from 'next/link';
//#endregion

const NotFound = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Fallback message='Oops! How did you get here?' />
      <Link href='/'>Return Home</Link>
    </Box>
  )
};

export default NotFound;
