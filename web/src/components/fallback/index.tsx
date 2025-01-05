/**
 * Displays a fallback UI with meaningful message to users in error situations
 *
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { Box, SxProps,Typography } from '@mui/material';
import { style } from 'Entain/components/fallback/style';
//#endregion

export type FallbackProps = {
  message?: string
  holderSx?: SxProps
  showIcon?: boolean
}

export const Fallback = ({ message='', holderSx={}, showIcon=true }: FallbackProps) => (
  <Box sx={ { ...style.holder, ...holderSx } }>
    { showIcon && <Typography variant='h3' sx={ style.oopsText }>🐒</Typography> }
    <Typography sx={ style.info } variant='body1'>{ message }</Typography>
  </Box>
);
