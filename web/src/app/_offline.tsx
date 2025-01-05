'use client';

/**
 * Displays a message to inform the user when they lose internet connection
 *
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box, Button } from '@mui/material';
import { Fallback } from 'Entain/components/fallback';
import { useRouter } from 'next/navigation';
//#endregion

const Offline = () => {
  const router = useRouter();
  const handleRefresh = () => router.refresh();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='80vh' mx={ 2 }>
      <Fallback message='Oops! You are offline 😟' />
      <Button onClick={ handleRefresh }>Retry</Button>
    </Box>
  );
};

export default Offline;
