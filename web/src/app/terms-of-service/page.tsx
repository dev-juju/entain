/**
 * Terms of Service entry point
 *
 * @module
 * @category Page
 */

//#region imports
import { Box, Typography } from '@mui/material';
//#endregion

const TOS = () => (
  <Box display='flex' flexDirection='column' alignItems='center' justifyContent='flex-start' mt={ 2 }>
    <Typography variant='h1'>Terms of Service</Typography>
    <Typography variant='body1'>
      This is a terms of service. It is a legal document that outlines the rules and guidelines for using our website and services.
    </Typography>
  </Box>
);

export default TOS;
