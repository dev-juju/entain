/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { RotateLeftRounded } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import { style } from 'Entain/app/movies/table/card/style';
import { UIMachineActorContext } from 'Entain/app/state';
import { rotateTranslation } from 'Entain/translations';
import { useState } from 'react';
//#endregion

export const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p/original';

export type MovieCardProps = {
  movie: Movie
  ref: ((node?: Element | null) => void) | null
}
export const MovieCard = ({ movie, ref }: MovieCardProps) => {
  const language = UIMachineActorContext.useSelector(state => state.context.language);

  const [face, setFace] = useState<'front' | 'back'>('front');
  const rotateCard = () => setFace(face === 'front' ? 'back' : 'front');

  const rotateCardButton = (
    <Tooltip title={ rotateTranslation[language] } placement='top'>
      <IconButton sx={ style.iconButton } onClick={ rotateCard }>
        <RotateLeftRounded />
      </IconButton>
    </Tooltip>
  );

  return (
    face === 'front' ?
      <Card ref={ ref } sx={ style.card } data-testid={ `movie-card-${ movie.id }` }>
        <CardMedia component='img' image={ tmdbImageBaseUrl + movie.poster_path } alt={ movie.title }
          sx={ style.cardMedia } data-testid={ `movie-card-image-${ movie.id }` } />
        <CardContent>
          <Tooltip title={ movie.title } placement='top'>
            <Typography variant='subtitle1' sx={ style.title } noWrap>{ movie.title }</Typography>
          </Tooltip>
          <Typography variant='body2' sx={ style.releaseDate }>{ movie.release_date }</Typography>
        </CardContent>
        { rotateCardButton }
      </Card>
      :
      <Card ref={ ref } sx={ style.card } data-testid={ `movie-card-${ movie.id }` }>
        <CardContent>
          <Typography variant='subtitle1' sx={ style.title } noWrap>{ movie.title }</Typography>
          <Typography variant='body2' sx={ style.releaseDate }>{ movie.release_date }</Typography>
          <Divider sx={ style.divider } />
          <Box sx={ style.overviewBox }>
            <Typography variant='body2'>{ movie.overview }</Typography>
          </Box>
        </CardContent>
        { rotateCardButton }
      </Card>
  );
};
