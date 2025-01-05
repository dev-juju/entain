'use client';

//#region imports
import { UIMachineActorContext } from 'Entain/app/state';
import { NavigationProvider } from 'Entain/components/navigation/provider';
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
        <NavigationProvider>
          { children }
        </NavigationProvider>
      </ThemeProvider>
    </UIMachineActorContext.Provider>
  )
};

export default Providers;
