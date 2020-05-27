import { AbxTask } from '../../shared/models/AbxTask';
import React, { useState } from 'react';

export interface IIndividualTasksGetOrDeleteError {
  abxTaskId: string;
}
export interface IIndividualTasksUpdateError {
  abxTaskId: string;
}

export type AbxTaskGetResponse = {
  data: AbxTask[];
};

const useIndividualTasks = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return {
    expanded,
    handleChange,
  };
};

export default useIndividualTasks;
