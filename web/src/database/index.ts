/**
 * @packageDocumentation
 * @category Database
 */

export class EntainDatabase {
  static apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  static headers = {
    'Content-Type': 'application/json',
  };

  static async listMovies(input: ListMoviesInput): Promise<ListMoviesResponse> {
    if (!input.category) throw new Error('Category is required');

    let url = `${ EntainDatabase.apiDomain }/movie/list?category=${ input.category }`;
    if (input.page) url += `&page=${ input.page }`;
    if (input.region) url += `&region=${ input.region }`;
    if (input.language) url += `&language=${ input.language }`;

    const response = await fetch(url, { method: 'GET', headers: EntainDatabase.headers, cache: 'force-cache' });
    if (!response.ok) throw new Error('Invalid response');

    const data = await response.json();
    return data;
  }

  static async searchMovies(input: SearchMoviesInput): Promise<SearchMoviesResponse> {
    if (!input.query) throw new Error('Query is required');

    let url = `${ EntainDatabase.apiDomain }/movie/search?query=${ input.query }`;
    if (input.page) url += `&page=${ input.page }`;
    if (input.language) url += `&language=${ input.language }`;
    if (input.include_adult) url += `&include_adult=${ input.include_adult }`;
    if (input.year) url += `&year=${ input.year }`;
    if (input.primary_release_year) url += `&primary_release_year=${ input.primary_release_year }`;

    const response = await fetch(url, { method: 'GET', headers: EntainDatabase.headers, cache: 'force-cache' });
    if (!response.ok) throw new Error('Invalid response');

    const data = await response.json();
    return data;
  }
}
