'use client';

/**
 * @module
 * @category State
 */

//#region imports
import { createActorContext } from '@xstate/react';
import { assign, setup } from 'xstate';
//#endregion

export type UIMachineContext = {
  theme: ThemeKey
  language: LanguageKey
}

export type UIMachineEvents = { type: 'Set theme'; payload: ThemeKey }
  | { type: 'Set language'; payload: LanguageKey };

export const uiMachine = setup({
  types: {
    context: {} as UIMachineContext,
    events: {} as UIMachineEvents,
  },
  actions: {
    setTheme: assign({ theme: (_, payload: ThemeKey) => payload }),
    setLanguage: assign({ language: (_, payload: LanguageKey) => payload }),
  },
  guards: {
    hasChanged: (_, input: { newValue: any, oldValue: any }) => input != null && input.newValue != input.oldValue,
  }
})
.createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QFUCSA6AKgCzAWzAGIBlMAFwAIzcCBtABgF1FQAHAe1gEsyv2A7FiAAeiAKwBGdACYALNIkAOAOxiANCACeiRVLEBffRrToAMgEN+UAK7mYJchQA2lm3bANmSEB268BQqIIslIAzNL0oRLS6lqIclL0yroxhkYg-OwQcEJoQr48fILeQQC0SnoAnLLK0gBsYnUxGtoIpXWGxhg4+GD5nIUBJYjl0tLolaGKNQ1Nsa0S9LIy9Y2p6SYWVrYw-X5FgSMSoaHoYtW1s81xCPWnikt1KgZpQA */
  id: 'UI',
  type: 'parallel',
  context: {
    theme: 'black',
    language: 'english',
  },
  states: {
    Theme: {
      type: 'atomic',
      on: {
        'Set theme': {
          guard: {
            type: 'hasChanged',
            params: ({ context: { theme }, event: { payload }}) => ({ newValue: payload, oldValue: theme })
          },
          actions: [{ type: 'setTheme', params: ({ event: { payload }}) => payload }],
        },
      }
    },
    Language: {
      type: 'atomic',
      on: {
        'Set language': {
          guard: {
            type: 'hasChanged',
            params: ({ context: { language }, event: { payload }}) => ({ newValue: payload, oldValue: language })
          },
          actions: [{ type: 'setLanguage', params: ({ event: { payload }}) => payload }],
        },
      }
    },
  }
});

export const UIMachineActorContext = createActorContext(uiMachine, { systemId: 'ui' });
