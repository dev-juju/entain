'use client'

/**
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box, Button } from '@mui/material';
import { Fallback } from 'Entain/components/fallback';
//#endregion

const GlobalError = ({ reset }: { error: Error & { digest?: string }, reset: () => void }) => {
  return (
    <html>
      <body>
        <Box width={ 1 } mt='20vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Fallback message='Something went wrong' />
          <Button variant='contained' color='primary' onClick={ reset }>Try again</Button>
        </Box>
      </body>
    </html>
  )
};

export default GlobalError;
