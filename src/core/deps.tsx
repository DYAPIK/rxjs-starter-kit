import React from 'react';

import { makeApi, Api } from 'services/api';

import { initFeatures } from './initFeatures';
import { FeaturesProvider } from './featureProvider';

function initAppEntities(api: Api) {
  return { features: initFeatures(api) };
}

function DepsProvider({ children }) {
  const api = makeApi();
  return (
    <FeaturesProvider value={initAppEntities(api).features}>
      {children}
    </FeaturesProvider>
  );
}

export { DepsProvider };
