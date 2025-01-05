/**
 * Privacy Policy entry point
 *
 * @module
 * @category Page
 */

//#region imports
import { Box, Typography } from '@mui/material';
//#endregion

const PrivacyPolicyPage = () => (
  <Box display='flex' flexDirection='column' alignItems='center' justifyContent='flex-start' mt={ 2 }>
    <Typography variant='h1'>Privacy Policy</Typography>
    <Typography variant='body1'>
      This is a privacy policy. It is a legal document that outlines how we collect, use, and protect your personal information.
    </Typography>
  </Box>
);

export default PrivacyPolicyPage;
