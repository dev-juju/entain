'use client';

/**
 * @module
 * @category State
 */

//#region imports
import { createActorContext } from '@xstate/react';
import { EntainDatabase } from 'Entain/database';
import { assign, fromPromise, setup } from 'xstate';
//#endregion

type MoviesContext = {
  data: ListMoviesResponse | SearchMoviesResponse | null
  errorMessage: string | null
  page: number
  category: MovieListCategory | null
  language: LanguageCode
  query: string
  searchString: string
};

type MoviesEvents =
  | { type: 'Set page'; payload: number }
  | { type: 'Set category'; payload: MovieListCategory }
  | { type: 'Set language'; payload: LanguageCode }
  | { type: 'Set query'; payload: string }
  | { type: 'Set search string'; payload: string };

const moviesMachine = setup({
  types: {
    events: {} as MoviesEvents,
    context: {} as MoviesContext
  },
  actors: {
    listMovies: fromPromise(async ({ input }: { input: ListMoviesInput }) => EntainDatabase.listMovies(input)),
    searchMovies: fromPromise(async ({ input }: { input: SearchMoviesInput }) => EntainDatabase.searchMovies(input)),
  },
  actions: {
    setData: assign({ data: ({ context: { data }}, params: ListMoviesResponse | SearchMoviesResponse) => {
      if (data == null) return params;
      const currentResults = data.results;
      return { page: params.page, total_pages: params.total_pages, total_results: params.total_results, results: currentResults.concat(params.results) };
    }}),
    resetData: assign({ data: null, page: 1 }),
    unsetQuery: assign({ query: '' }),
    unsetCategory: assign({ category: null }),
    resetCategory: assign({ category: 'now_playing' }),
    setPage: assign({ page: (_, params: number) => params }),
    setQuery: assign({ query: (_, params: string) => params }),
    setSearchString: assign({ searchString: (_, params: string) => params }),
    setCategory: assign({ category: (_, params: MovieListCategory) => params }),
    setLanguage: assign({ language: (_, params: LanguageCode) => params }),
    setError: assign({ errorMessage: (_, error: Error) => error.message }),
    unsetError: assign({ errorMessage: null }),
  },
  guards: {
    hasChanged: (_, input: { newValue: any, oldValue: any }) => input != null && input.newValue != input.oldValue,
    queryHasChangedAndIsEmpty: (_, input: { newValue: string, oldValue: string }) => input != null && input.newValue.trim() == '' && input.newValue != input.oldValue,
    queryHasChangedAndIsNotEmpty: (_, input: { newValue: string, oldValue: string }) => input != null && input.newValue.trim() != '' && input.newValue != input.oldValue,
  }
})
.createMachine({
  id: 'Movies',
  initial: 'List',
  context: {
    data: null,
    page: 1,
    query: '',
    searchString: '',
    language: 'en-US',
    category: 'now_playing',
    errorMessage: null,
  },
  states: {
    'List': {
      initial: 'Fetching',
      states: {
        'Fetching': {
          invoke: {
            src: 'listMovies',
            input: ({ context: { page, category, language } }) => ({ page, category: category ?? 'now_playing', language }),
            onDone: {
              actions: [
                { type: 'setData', params: ({ event: { output }}) => output },
                'unsetError',
              ],
              target: '#Movies.List.Idle',
            },
            onError: {
              actions: [{ type: 'setError', params: ({ event: { error }}) => error as Error }],
              target: '#Movies.List.Try Again',
            },
          },
        },
        'Try Again': {
          after: {
            10000: {
              target: '#Movies.List.Fetching',
            },
          },
        },
        'Idle': {
          on: {
            'Set page': {
              guard: {
                type: 'hasChanged',
                params: ({ context: { page }, event: { payload }}) => ({ newValue: payload, oldValue: page })
              },
              actions: [
                { type: 'setPage', params: ({ event: { payload }}) => payload },
              ],
              target: '#Movies.List.Fetching',
            },
            'Set language': {
              guard: {
                type: 'hasChanged',
                params: ({ context: { language }, event: { payload }}) => ({ newValue: payload, oldValue: language })
              },
              actions: [
                { type: 'setLanguage', params: ({ event: { payload }}) => payload },
              ],
              target: '#Movies.List.Fetching',
            },
          },
        },
      },
    },
    'Search': {
      initial: 'Fetching',
      states: {
        'Fetching': {
          invoke: {
            src: 'searchMovies',
            input: ({ context: { page, language, query } }) => ({ page, language, query }),
            onDone: {
              actions: [
                { type: 'setData', params: ({ event: { output }}) => output },
                'unsetError',
              ],
              target: '#Movies.Search.Idle',
            },
            onError: {
              actions: [{ type: 'setError', params: ({ event: { error }}) => error as Error }],
              target: '#Movies.Search.Try Again',
            },
          },
        },
        'Try Again': {
          after: {
            10000: {
              target: '#Movies.Search.Fetching',
            },
          },
        },
        'Idle': {
          on: {
            'Set page': {
              guard: {
                type: 'hasChanged',
                params: ({ context: { page }, event: { payload }}) => ({ newValue: payload, oldValue: page })
              },
              actions: [
                { type: 'setPage', params: ({ event: { payload }}) => payload },
              ],
              target: '#Movies.Search.Fetching',
            },
            'Set language': {
              guard: {
                type: 'hasChanged',
                params: ({ context: { language }, event: { payload }}) => ({ newValue: payload, oldValue: language })
              },
              actions: [
                { type: 'setLanguage', params: ({ event: { payload }}) => payload },
              ],
              target: '#Movies.Search.Fetching',
            },
          },
        },
      },
    },
  },
  on: {
    'Set category': {
      guard: {
        type: 'hasChanged',
        params: ({ context: { category }, event: { payload }}) => ({ newValue: payload, oldValue: category })
      },
      actions: [
        'resetData', 'unsetQuery',
        { type: 'setCategory', params: ({ event: { payload }}) => payload },
      ],
      target: '#Movies.List.Fetching',
    },
    'Set query': [
      {
        guard: {
          type: 'queryHasChangedAndIsNotEmpty',
          params: ({ context: { query }, event: { payload }}) => ({ newValue: payload, oldValue: query })
        },
        actions: [
          'resetData', 'unsetCategory',
          { type: 'setQuery', params: ({ event: { payload }}) => payload },
        ],
        target: '#Movies.Search.Fetching',
      },
      {
        guard: {
          type: 'queryHasChangedAndIsEmpty',
          params: ({ context: { query }, event: { payload }}) => ({ newValue: payload, oldValue: query })
        },
        actions: ['resetData', 'resetCategory', 'unsetQuery'],
        target: '#Movies.List.Fetching',
      }
    ],
    'Set search string': {
      guard: {
        type: 'hasChanged',
        params: ({ context: { searchString }, event: { payload }}) => ({ newValue: payload, oldValue: searchString })
      },
      actions: [{ type: 'setSearchString', params: ({ event: { payload }}) => payload }],
    },
  },
});

export const MoviesMachineActorContext = createActorContext(moviesMachine, { systemId: 'movies' });
