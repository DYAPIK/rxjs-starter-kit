import React, { useEffect, useState } from 'react';

import { useFeature } from 'core/featureProvider';

export function Clients() {
  const { controller, model } = useFeature('clients');
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  useEffect(() => {
    controller.loadWorkspaces();
    model.workspaces$.subscribe(x => {
      debugger;
      console.log(x);
      setWorkspaces(x);
    });
  }, []);
  return (
    <div>
      {workspaces.map(x => <div>{x.id}</div>)}
    </div>
  );
}
