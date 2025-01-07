/**
 * @packageDocumentation
 * @category Test
 */

//#region Imports
import React from 'react'
import { render, screen } from '@testing-library/react';
import { MovieCard, tmdbImageBaseUrl } from 'Entain/app/movies/table/card';
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

describe('<MovieCard />', () => {
  it('displays correct image from poster path', async () => {
    render(<MovieCard movie={ movie } ref={ null } />);

    const image = await screen.findByTestId(`movie-card-image-${ movie.id }`);
    expect(image).toBeDefined();
    expect(image.getAttribute('src')).toEqual(tmdbImageBaseUrl + movie.poster_path);
  });
});
