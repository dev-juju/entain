/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import { waitFor } from '@testing-library/react';
import { moviesMachine } from 'Entain/app/movies/state';
import { createActor } from 'xstate';

// eslint-disable-next-line no-restricted-imports
import { EntainDatabase } from '../../database';
//#endregion

// Mock the EntainDatabase class
jest.mock('../../database', () => ({
  EntainDatabase: {
    listMovies: jest.fn()
  }
}));

describe('moviesMachine', () => {
  beforeEach(() => (EntainDatabase.listMovies as jest.Mock).mockReset());

  it('should start in List.Fetching state', () => {
    const movieActor = createActor(moviesMachine).start();

    expect(movieActor.getSnapshot().value).toEqual({ List: 'Fetching' });
    movieActor.stop();
  });

  it('should handle category changes', () => {
    const movieActor = createActor(moviesMachine).start();
    movieActor.send({ type: 'Set category', payload: 'popular' });

    const snapshot = movieActor.getSnapshot();

    expect(snapshot.context.category).toBe('popular');
    movieActor.stop();
  });

  it('should only handle page changes in Idle state', async () => {
    (EntainDatabase.listMovies as jest.Mock).mockResolvedValue({
      results: [],
      page: 1,
      total_pages: 10,
      total_results: 100
    });

    const movieActor = createActor(moviesMachine).start();

    // Wait for successful fetch and Idle state
    await waitFor(() => {
      const snapshot = movieActor.getSnapshot();
      expect(snapshot.value).toEqual({ List: 'Idle' });
    });

    // Now we can set the page
    movieActor.send({ type: 'Set page', payload: 2 });
    const snapshot = movieActor.getSnapshot();

    expect(snapshot.context.page).toBe(2);
    movieActor.stop();
  });

  it('should handle language changes', () => {
    const movieActor = createActor(moviesMachine).start();
    movieActor.send({ type: 'Set language', payload: 'en-US' });

    const snapshot = movieActor.getSnapshot();

    expect(snapshot.context.language).toBe('en-US');
    movieActor.stop();
  });
});
