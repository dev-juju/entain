/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { style } from 'Entain/app/movies/table/card/style';
//#endregion

const tmdbImageBaseUrl = 'https://image.tmdb.org/t/p/original';

export type MovieCardProps = {
  movie: Movie
  ref: ((node?: Element | null) => void) | null
}
export const MovieCard = ({ movie, ref }: MovieCardProps) => {
  return (
    <Card ref={ ref } sx={ style.card }>
      <CardMedia component='img' image={ tmdbImageBaseUrl + movie.poster_path } alt={ movie.title } sx={ style.cardMedia } />
      <CardContent>
        <Tooltip title={ movie.title } placement='top'>
          <Typography variant='subtitle1' sx={ style.title } noWrap>{ movie.title }</Typography>
        </Tooltip>
        <Typography variant='body2' sx={ style.releaseDate }>{ movie.release_date }</Typography>
      </CardContent>
    </Card>
  );
};
