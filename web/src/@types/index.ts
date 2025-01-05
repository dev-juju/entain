/**
 * @packageDocumentation
 * @category Type
 */

//#region React
import { themeVariants } from 'Entain/theme/variants';
import { SupportedLanguageEnum } from 'Entain/translations/utils';
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 GLOBAL TYPES
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Globally available types.
 * Types used by multiple components are defined here to avoid multiple imports
*/

declare global {
  type ThemeKey = keyof typeof themeVariants;

  type LanguageCode = 'en-US' | 'et-EE' | 'ru-RU';
  type LanguageKey = keyof typeof SupportedLanguageEnum;
  type Translation = {
    [key in LanguageKey]: string;
  };

  type TooltipPlacement = 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';

  type Movie = {
    id: number
    title: string
    overview: string
    poster_path: string
    release_date: string
    vote_average: number
    vote_count: number
    genre_ids: number[]
    original_language: string
    original_title: string
    popularity: number
    video: boolean
    adult: boolean
    backdrop_path: string
  }

  type MovieListCategory = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

  type ListMoviesInput = {
    category: MovieListCategory
    page?: number
    language?: string
    region?: string
  }

  type SearchMoviesInput = {
    query: string
    page?: number
    language?: string
    include_adult?: boolean
    year?: number
    primary_release_year?: number
  }

  type ListMoviesResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }

  type SearchMoviesResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
    dates: {
      maximum: string
      minimum: string
    }
  }
}

export { };
