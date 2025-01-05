'use client';

/**
 * Serves the Home page
 *
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box, Typography } from '@mui/material';
//#endregion

const Home = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' width={ 1 }>
      <Typography>Welcome</Typography>
    </Box>
  );
};

export default Home;
