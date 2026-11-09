import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ProgressProvider } from './store/progressStore';
import { UIProvider } from './store/uiStore';
import { AIHelpProvider } from './store/aiHelpStore';

export default function App(): React.ReactElement {
  return (
    <ProgressProvider>
      <UIProvider>
        <AIHelpProvider>
          <RouterProvider router={router} />
        </AIHelpProvider>
      </UIProvider>
    </ProgressProvider>
  );
}
