'use client';

/**
 * Serves the Locations page
 *
 * @packageDocumentation
 * @category Page
 */

//#region imports
import { Box } from '@mui/material';
import { Filter } from 'Entain/app/movies/filter';
import { MoviesMachineActorContext } from 'Entain/app/movies/state';
import { style } from 'Entain/app/movies/style';
import { MoviesTable } from 'Entain/app/movies/table';
//#endregion

const Movies = () => {
  return (
    <MoviesMachineActorContext.Provider>
      <Box sx={ style.container }>
        <Filter />
        <MoviesTable />
      </Box>
    </MoviesMachineActorContext.Provider>
  );
};

export default Movies;
