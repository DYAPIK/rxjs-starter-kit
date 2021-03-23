import React from 'react';

import { ServicesProvider } from 'services';

import { initFeatures } from './initFeatures';
import { FeaturesProvider } from './featureProvider';
import { initServices } from './initServices';

function initAppEntities() {
  const services = initServices();
  return { features: initFeatures(services), services };
}

function DepsProvider({ children }) {
  const appEntities = initAppEntities();
  return (
    <ServicesProvider value={appEntities.services}>
      <FeaturesProvider value={appEntities.features}>
        {children}
      </FeaturesProvider>
    </ServicesProvider>
  );
}

export { DepsProvider };
