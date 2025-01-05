/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { Box, Tooltip, TooltipProps, Typography } from '@mui/material';
import { style } from 'Entain/components/expandable-menu-button/style';
import { dummy } from 'Entain/utils/functions';
import { MouseEvent, ReactNode } from 'react';
//#endregion

export type ExpandableMenuButtonProps = {
  text?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  icon: ReactNode
  tooltip?: string
  expanded?: boolean
  isActive?: boolean
  placement?: TooltipProps['placement']
};

export const ExpandableMenuButton = ({ text, tooltip, icon, expanded, isActive, placement='top', onClick=dummy }: ExpandableMenuButtonProps) => {
  const isLongText = text && text.length > 15;
  const menuButton = (
    <Box sx={ style.container } onClick={ onClick }>
      <Box sx={ { ...style.button, justifyContent: text && expanded ? 'flex-start' : 'center', ...(isActive ? style.activeButton : {}) } }>
        { icon }
        {
          text ?
            <Typography variant='body1' sx={ { ...style.text, ...(expanded ? style.openText : {}) } } noWrap>{ text }</Typography>
            :
            <></>
        }
      </Box>
    </Box>
  );

  return (
    !isLongText && (expanded || !tooltip) ?
      menuButton
      :
      <Tooltip title={ tooltip || text } placement={ placement } arrow={ false }>{ menuButton }</Tooltip>
  );
};
