import React, { useEffect } from 'react';
import { combineLatest } from 'rxjs';

import { ClientsModel } from 'features/clients/model';
import { connect, ConnectProps } from 'features/clients/connector';

type StateProps = {
  workspaces: string[];
  clients: number[];
};

const initialState: StateProps = { clients: [], workspaces: [] };

type Props = StateProps & ConnectProps;

function Clients({ workspaces, clients, getFeatureStore }: Props) {
  const { controller } = getFeatureStore();

  useEffect(() => controller.loadWorkspaces(), []);

  return (
    <div>
      <div>{workspaces.map(x => <div>{(x as any).id}</div>)}</div>
      <div>{clients.map(x => <div>{x}</div>)}</div>
    </div>
  );
}

function mapModelToProps(model: ClientsModel) {
  const { workspaces$ } = model.data;
  const { clients$ } = model.edit;
  return combineLatest(workspaces$, clients$, (workspaces, clients) => ({ workspaces, clients }));
}

export default connect(mapModelToProps, initialState, Clients);
