'use client';

/**
 * @packageDocumentation
 * @category Component
 */

//#region imports
import { Box } from '@mui/material';
import { MoviesMachineActorContext } from 'Entain/app/movies/state';
import { MovieCard } from 'Entain/app/movies/table/card';
import { CardSkeleton } from 'Entain/app/movies/table/card/skeleton';
import { style } from 'Entain/app/movies/table/style';
import { useEffect } from 'react';
import { useInView  } from 'react-intersection-observer';
//#endregion

export const MoviesTable = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const actorRef = MoviesMachineActorContext.useActorRef();
  const state = MoviesMachineActorContext.useSelector(state => state);
  const data = state.context.data;
  const page = data?.page;
  const total_pages = data?.total_pages;

  useEffect(
    () => {
      if(inView && page && total_pages && page < total_pages) actorRef.send({ type: 'Set page', payload: page + 1 });
    },
    [inView, page, total_pages, actorRef]
  )

  return (
    <Box sx={ style.container }>
      { data?.results.map((movie, i) => <MovieCard key={ movie.id } ref={ (data?.results.length - 1) === i ? ref : null } movie={ movie } />) }
      {
        state.matches({ List: 'Fetching' }) || state.matches({ Search: 'Fetching' }) ?
          Array.from(new Array(20)).map((_, index) => <CardSkeleton key={ `card-skeleton-${index}` } />)
          :
          <></>
      }
    </Box>
  );
};
