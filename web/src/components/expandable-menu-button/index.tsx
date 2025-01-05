/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { Badge, Box, Tooltip, Typography } from '@mui/material';
import { style } from 'Entain/components/expandable-menu-button/style';
import { dummy } from 'Entain/utils/functions';
import { MouseEvent, ReactNode } from 'react';
//#endregion

export type ExpandableMenuButtonProps = {
  text?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  icon: ReactNode
  badgeContent?: ReactNode
  badgeColor?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  tooltip?: string
  expanded?: boolean
  isActive?: boolean
  placement?: TooltipPlacement
};

export const ExpandableMenuButton = ({
  text, tooltip, icon, expanded, placement='top', onClick=dummy, badgeContent='', badgeColor='default', isActive
}: ExpandableMenuButtonProps) => {
  const isLongText = text && text.length > 15;
  const iconComponent = badgeContent ?
    <Badge color={ badgeColor } badgeContent={ badgeContent } max={ 9999 }>{ icon }</Badge>
    :
    icon;

  const menuButton = (
    <Box sx={ style.container } onClick={ onClick }>
      <Box sx={ { ...style.button, justifyContent: text && expanded ? 'flex-start' : 'center', ...(isActive ? style.activeButton : {}) } }>
        { iconComponent }
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
