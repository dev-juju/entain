'use client';

/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { LanguageRounded } from '@mui/icons-material';
import { Box, Menu, MenuItem, TooltipProps } from '@mui/material';
import { UIMachineActorContext } from 'Entain/app/state';
import { ExpandableMenuButton } from 'Entain/components/expandable-menu-button';
import { languageTranslation } from 'Entain/translations';
import { getLanguageLogo, getLanguageName, SupportedLanguageEnum } from 'Entain/translations/utils';
import { MouseEvent, useState } from 'react';
//#endregion

export type LanguageMenuProps = {
  expanded?: boolean
  placement?: TooltipProps['placement']
};

export const LanguageMenu = ({ expanded, placement='top' }: LanguageMenuProps) => {
  const actorRef = UIMachineActorContext.useActorRef();
  const language = UIMachineActorContext.useSelector(store => store.context.language);

  const [languageAnchor, setLanguageAnchor] = useState<HTMLElement | null>(null);

  const languageChanged = (language: SupportedLanguageEnum) => {
    handleCloseLanguage();
    actorRef.send({ type: 'Set language', payload: language });
  }
  const showLanguageList = (event: MouseEvent<HTMLElement>) => setLanguageAnchor(event.currentTarget);
  const handleCloseLanguage = () => setLanguageAnchor(null);

  return (
    <>
      <ExpandableMenuButton text={ language } expanded={ expanded } icon={ <LanguageRounded /> }
        placement={ placement } tooltip={ languageTranslation[language] } onClick={ showLanguageList } />
      <Menu anchorEl={ languageAnchor } keepMounted open={ Boolean(languageAnchor) }
        onClose={ handleCloseLanguage } data-testid='menu-translation'>
        {
          Object.values(SupportedLanguageEnum).map(item =>
            <MenuItem key={ item } value={ item } selected={ item == language } onClick={ () => languageChanged(item) }
              sx={ { fontSize: 12 } } data-testid={ `menu-item-translation-${ item.trim().toLowerCase().replaceAll(' ', '-') }` }>
              <Box sx={ { mr: 1 } }>{ getLanguageLogo(item) }</Box>
              { getLanguageName(item) }
            </MenuItem>
          )
        }
      </Menu>
    </>
  );
};
