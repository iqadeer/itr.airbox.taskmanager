import { ChangeEventHandler, useState, MouseEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskUpdateResponse = {
  data: AbxTask;
};

const useCreateMultipleTasks = () => {
  const [createQueue, setCreateQueue] = useState<AbxTask[]>([] as AbxTask[]);
  const [createTaskState, setCreateTaskState] = useState<AbxTask>({
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

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{
    message: string;
    severity: 'error' | 'success';
  }>({
    message: '',
    severity: 'success',
  });

  const isUpdateTaskStateValid = () => {
    const error: AbxTask = {
      abxTaskId: '',
      organisationTaskId: createTaskState.organisationTaskId ? '' : 'Organisation task id is required',
      organisationId: createTaskState.organisationId ? '' : 'Organisation id is required',
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
    return createTaskState.organisationId && createTaskState.organisationTaskId;
  };

  const handleAddToQueue: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isUpdateTaskStateValid()) {
      setCreateQueue([...createQueue, createTaskState]);
      setCreateTaskState({
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
      setSnackBar({ message: `Task added to queue: ${e}`, severity: 'success' });
      setOpenSnackBar(true);
    }
  };

  const handleCreateFromQueue: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (createQueue.length > 0) {
      try {
        await APIService.post<AbxTask[], AbxTaskUpdateResponse>(`tasks`, createQueue, 'token');
        setCreateQueue([]);
        setSnackBar({ message: 'Tasks created successfully', severity: 'success' });
        setOpenSnackBar(true);
      } catch (e) {
        setSnackBar({ message: `Error creating tasks: ${e}`, severity: 'error' });
        setOpenSnackBar(true);
      }
    } else {
      setSnackBar({ message: `Error: Create queue is empty. Please queue at least one task`, severity: 'error' });
      setOpenSnackBar(true);
    }
  };

  const closeSnackBar = (): void => {
    setOpenSnackBar(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setCreateTaskState({ ...createTaskState, [name]: value });
    const errorMessage = !value ? `${name} is required` : '';
    setUpdateTaskStateError({ ...updateTaskStateError, [name]: errorMessage });
  };

  return {
    handleCreateFromQueue,
    handleChange,
    openSnackBar,
    closeSnackBar,
    message: snackBar.message,
    severity: snackBar.severity,
    updateTaskState: createTaskState,
    updateTaskStateError,
    handleAddToQueue,
    createQueue,
  };
};

export default useCreateMultipleTasks;
