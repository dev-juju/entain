/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { CloseRounded, SearchRounded } from '@mui/icons-material';
import { Box, Chip,Divider, IconButton, InputAdornment, Paper, TextField, Tooltip, Typography } from '@mui/material';
import { movieListCategories } from 'Entain/@types';
import { style } from 'Entain/app/movies/filter/style';
import { MoviesMachineActorContext } from 'Entain/app/movies/state';
import { UIMachineActorContext } from 'Entain/app/state';
import {
  filterByCategoryTranslation, filterByNameTranslation, nowPlayingTranslation, popularTranslation,  searchTranslation,
  topRatedTranslation, upcomingTranslation
} from 'Entain/translations';
import { getLanguageLocale } from 'Entain/translations/utils';
import { useDebounce } from 'Entain/utils/hooks';
import { ChangeEvent, useEffect } from 'react';
//#endregion

export const Filter = () => {
  const moviesActorRef = MoviesMachineActorContext.useActorRef();
  const language = UIMachineActorContext.useSelector(store => store.context.language);
  const { searchString, category } = MoviesMachineActorContext.useSelector(store => store.context);
  const debouncedSearchString = useDebounce(searchString, 1000);

  useEffect(
    () => { moviesActorRef.send({ type: 'Set query', payload: debouncedSearchString.trim() }); },
    [debouncedSearchString, moviesActorRef]
  );

  useEffect(
    () => { moviesActorRef.send({ type: 'Set language', payload: getLanguageLocale(language) }); },
    [language, moviesActorRef]
  );

  const handleSearchClear = () => moviesActorRef.send({ type: 'Set search string', payload: '' });
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => moviesActorRef.send({ type: 'Set search string', payload: event.target.value });
  const handleCategoryClick = (category: MovieListCategory) => () => moviesActorRef.send({ type: 'Set category', payload: category });
  const getCategoryName = (movieListCategory: MovieListCategory) => {
    switch (movieListCategory) {
      case 'now_playing': return nowPlayingTranslation[language];
      case 'popular': return popularTranslation[language];
      case 'top_rated': return topRatedTranslation[language];
      case 'upcoming': return upcomingTranslation[language];
    }
  }

  return (
    <Box sx={ style.container }>
      <Paper sx={ style.paper }>
        <Typography variant='body2' sx={ style.title }>{ filterByNameTranslation[language] }</Typography>
        <Divider sx={ style.divider } flexItem />
        <TextField placeholder={ searchTranslation[language] } type='text' variant='outlined' size='small' sx={ style.textField }
          value={ searchString } onChange={ handleSearchChange }
          slotProps={ {
            inputLabel: { shrink: true },
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  {
                    searchString ?
                      <Tooltip title='Clear' placement='top'>
                        <IconButton sx={ style.iconButton } onClick={ handleSearchClear }>
                          <CloseRounded sx={ style.clearIcon } />
                        </IconButton>
                      </Tooltip>
                      :
                      <SearchRounded sx={ style.searchIcon } />
                  }
                </InputAdornment>
              ),
            }
          } }
        />
      </Paper>
      <Paper sx={ { ...style.paper, display: { xs: 'none', md: 'flex' } } }>
        <Typography variant='body2' sx={ style.title }>{ filterByCategoryTranslation[language] }</Typography>
        <Divider sx={ style.divider } flexItem />
        <Box sx={ style.categoryBox }>
          {
            movieListCategories.map(c => <Chip key={ c } label={ getCategoryName(c) } onClick={ handleCategoryClick(c) } color={ c === category ? 'info' : 'default' } />)
          }
        </Box>
      </Paper>
    </Box>
  );
};
