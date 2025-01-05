'use client';

/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { HomeRounded, PlayArrowRounded } from '@mui/icons-material';
import { Box,Paper } from '@mui/material';
import { UIMachineActorContext } from 'Entain/app/state';
import { NavigationButton } from 'Entain/components/navigation/button';
import { Pages } from 'Entain/components/navigation/pages.config';
import { style } from 'Entain/components/navigation/style';
import { ThemeMenu } from 'Entain/theme/menu';
import { homeTranslation, moviesTranslation } from 'Entain/translations';
import { LanguageMenu } from 'Entain/translations/menu';
import { type ReactNode, useMemo } from 'react';
//#endregion

export type NavigationProviderProps = {
  children: ReactNode
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const language = UIMachineActorContext.useSelector(store => store.context.language);

  const routes: NavigationMenuItem[] = useMemo(
    () => [
      {
        name: homeTranslation[language],
        icon: <HomeRounded />,
        link: Pages.home.link,
        dataCy: 'navigation-button-home'
      },
      {
        name: moviesTranslation[language],
        icon: <PlayArrowRounded />,
        link: Pages.movies.link,
        dataCy: 'navigation-button-movies'
      },
    ],
    [language]
  );

  return (
    <Box sx={ style.container }>
      { children }
      <Paper component='footer' sx={ style.paper }>
        <Box sx={ style.row }>
          { routes.map(route => <NavigationButton key={ route.name } route={ route } listItemSx={ style.menuButton } />) }
        </Box>
        <Box sx={ style.row }>
          <LanguageMenu />
          <ThemeMenu />
        </Box>
      </Paper>
    </Box>
  )
};
