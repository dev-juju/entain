'use client';

//#region imports
import { UIMachineActorContext } from 'Entain/app/state';
import { ThemeProvider } from 'Entain/theme/provider';
import { ReactNode } from 'react';
//#endregion

export type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UIMachineActorContext.Provider>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </UIMachineActorContext.Provider>
  )
};

export default Providers;
