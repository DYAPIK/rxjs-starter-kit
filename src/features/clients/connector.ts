import { makeConnector } from 'shared/rx';
import { ContainerProps } from 'shared/rx/makeConnector';

import { ClientFeatureStore } from '.';

export type ConnectProps = ContainerProps<ClientFeatureStore>;

export const connect = makeConnector<ClientFeatureStore>({ featureName: 'clients' });
