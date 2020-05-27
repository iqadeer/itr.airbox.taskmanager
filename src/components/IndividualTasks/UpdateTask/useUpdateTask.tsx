import { ChangeEventHandler, useState, FormEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskUpdateResponse = {
  data: AbxTask;
};

const useUpdateTask = () => {
  const isUpdateTaskStateValid = () => {
    const error: AbxTask = {
      abxTaskId: updateTaskState.abxTaskId ? '' : 'abxTaskId is required',
      organisationTaskId: '',
      organisationId: '',
      priority: '',
      taskStatus: '',
      assignedTo: '',
      timeStamp: '',
      latitude: '',
      longitude: '',
      taskSummary: '',
      taskDescription: '',
    };

    setUpdateTaskStateError(error);
    return updateTaskState.abxTaskId;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isUpdateTaskStateValid()) {
      try {
        const result = await APIService.put<AbxTask, AbxTaskUpdateResponse>(
          `tasks/${updateTaskState.abxTaskId}`,
          updateTaskState,
          'token'
        );
        setSnackBar({ message: JSON.stringify(result.data), severity: 'success' });
        setOpenSnackBar(true);
        setUpdateTaskState({
          abxTaskId: '',
          organisationTaskId: '',
          organisationId: '',
          priority: '',
          taskStatus: '',
          assignedTo: '',
          timeStamp: '',
          latitude: '',
          longitude: '',
          taskSummary: '',
          taskDescription: '',
        });
        console.log(result.data);
      } catch (e) {
        setSnackBar({ message: `Error updating task: ${e}`, severity: 'error' });
        setOpenSnackBar(true);
      }
    }
  };

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{
    message: string;
    severity: 'error' | 'success';
  }>({
    message: '',
    severity: 'success',
  });
  const closeSnackBar = (): void => {
    setOpenSnackBar(false);
  };

  const [updateTaskState, setUpdateTaskState] = useState<AbxTask>({
    abxTaskId: '',
    organisationTaskId: '',
    organisationId: '',
    priority: '',
    taskStatus: '',
    assignedTo: '',
    timeStamp: '',
    latitude: '',
    longitude: '',
    taskSummary: '',
    taskDescription: '',
  });

  const [updateTaskStateError, setUpdateTaskStateError] = useState<AbxTask>({
    abxTaskId: '',
    organisationTaskId: '',
    organisationId: '',
    priority: '',
    taskStatus: '',
    assignedTo: '',
    timeStamp: '',
    latitude: '',
    longitude: '',
    taskSummary: '',
    taskDescription: '',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setUpdateTaskState({ ...updateTaskState, [name]: value });
    const errorMessage = !value ? `${name} is required` : '';
    setUpdateTaskStateError({ ...updateTaskStateError, [name]: errorMessage });
  };

  return {
    handleSubmit,
    handleChange,
    openSnackBar,
    closeSnackBar,
    message: snackBar.message,
    severity: snackBar.severity,
    updateTaskState,
    updateTaskStateError,
  };
};

export default useUpdateTask;
