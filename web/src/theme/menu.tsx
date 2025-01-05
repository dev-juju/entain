'use client';

/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { WbSunnyRounded } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { UIMachineActorContext } from 'Entain/app/state';
import { ExpandableMenuButton } from 'Entain/components/expandable-menu-button';
import { themeVariants } from 'Entain/theme/variants';
import { themeTranslation } from 'Entain/translations';
import { dummy } from 'Entain/utils/functions';
import { MouseEvent, useState } from 'react';
//#endregion

export type ThemeMenuProps = {
  expanded?: boolean
  placement?: TooltipPlacement
  onSelect?: () => void
};

export const ThemeMenu = ({ expanded, placement='top', onSelect=dummy }: ThemeMenuProps) => {
  const actorRef = UIMachineActorContext.useActorRef();
  const { theme, language } = UIMachineActorContext.useSelector(store => store.context);

  const [anchor, seAnchor] = useState<HTMLElement | null>(null);

  const themeChanged = (theme: keyof typeof themeVariants) => () => {
    handleClose();
    actorRef.send({ type: 'Set theme', payload: theme });
    onSelect();
  }
  const showList = (event: MouseEvent<HTMLElement>) => seAnchor(event.currentTarget);
  const handleClose = () => seAnchor(null);

  return (
    <>
      <ExpandableMenuButton text={ theme } expanded={ expanded } icon={ <WbSunnyRounded /> }
        placement={ placement } tooltip={ themeTranslation[language] } onClick={ showList } />
      <Menu anchorEl={ anchor } keepMounted open={ Boolean(anchor) } onClose={ handleClose } data-testid='menu-theme'>
        {
          Object.keys(themeVariants).map(item =>
            <MenuItem key={ item } value={ item } selected={ item == theme } onClick={ themeChanged(item as any) }
              data-testid={ `menu-item-theme-${ item.trim().toLowerCase().replaceAll(' ', '-') }` }>
              { item }
            </MenuItem>
          )
        }
      </Menu>
    </>
  );
};
