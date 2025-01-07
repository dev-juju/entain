/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import React from 'react'
import { render, screen, act } from '@testing-library/react';
import { MovieCard, tmdbImageBaseUrl } from 'Entain/app/movies/table/card';
import { uiMachine, UIMachineActorContext } from 'Entain/app/state';
//#endregion

const movie: Movie = {
  id: 1,
  title: 'The Matrix',
  release_date: '1999-03-31',
  poster_path: '/2E1x1qcHqGZcYuYi4PzVZjzg8IV.jpg',
  overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  vote_average: 8.7,
  vote_count: 1000,
  genre_ids: [1, 2, 3],
  original_language: 'en',
  original_title: 'The Matrix',
  popularity: 100,
  video: false,
  adult: false,
  backdrop_path: '/2E1x1qcHqGZcYuYi4PzVZjzg8IV.jpg',
}

const renderWithUiContext = (ui: React.ReactElement) => {
  return render(
    <UIMachineActorContext.Provider logic={uiMachine} options={{ input: { language: 'en-US' } }}>
      { ui }
    </UIMachineActorContext.Provider>
  );
};

describe('<MovieCard />', () => {
  it('displays correct image from poster path', async () => {
    renderWithUiContext(<MovieCard movie={ movie } ref={ null } />);

    const image = await screen.findByTestId(`movie-card-image-${ movie.id }`);

    expect(image).toBeDefined();
    expect(image.getAttribute('src')).toEqual(tmdbImageBaseUrl + movie.poster_path);
  });

  it('rotates card when rotation button is clicked', async () => {
    renderWithUiContext(<MovieCard movie={ movie } ref={ null } />);

    // Initially shows front face with image
    const frontImage = await screen.findByTestId(`movie-card-image-${ movie.id }`);
    expect(frontImage).toBeDefined();

    // Click rotate button
    let rotateButton = screen.getByRole('button');
    await act(async () => rotateButton.click());

    // Image should no longer be visible, overview text should be shown
    expect(screen.queryByTestId(`movie-card-image-${ movie.id }`)).toBeNull();
    expect(screen.getByText(movie.overview)).toBeDefined();

    // Click rotate button again
    rotateButton = screen.getByRole('button');
    await act(async () => rotateButton.click() );

    // Should show front face with image again
    const frontImageAgain = await screen.findByTestId(`movie-card-image-${ movie.id }`);
    expect(frontImageAgain).toBeDefined();
  });
});
