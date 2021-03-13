import * as React from 'react';

import { DepsProvider } from '../core/deps';
import * as pages from './pages';

export function App() {
  return (
    <DepsProvider>
      <pages.MainPage />
    </DepsProvider>
  );
}
