import { ChangeEventHandler, useState, MouseEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskGetResponse = {
  data: AbxTask[];
};

const useGetOrDeleteTask = () => {
  const [abxTaskId, setAbxTaskId] = useState<string>('');
  const [abxTaskIdError, setAbxTaskIdError] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setAbxTaskId(value);

    const errorMessage = !value ? `${name} is required` : '';
    setAbxTaskIdError(errorMessage);
  };

  const isGetTaskStateValid = () => {
    setAbxTaskIdError(abxTaskId ? '' : 'abxTaskId is required');
    return !!abxTaskId;
  };

  const handleGet: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (isGetTaskStateValid()) {
      try {
        const result = await APIService.get<AbxTaskGetResponse>(`tasks/${abxTaskId}`, 'token');
        setSnackBar({ message: JSON.stringify(result.data), severity: 'success' });
        setOpenSnackBar(true);
        setAbxTaskId('');
        console.log(result.data);
      } catch (e) {
        setSnackBar({ message: `Error getting task: ${e}`, severity: 'error' });
        setOpenSnackBar(true);
      }
    }
  };

  const [openCancelDialog, setOpenCancelDialog] = useState<boolean>(false);

  const openOrCloseDialog = (open: boolean) => {
    if (open) {
      if (isGetTaskStateValid()) {
        setOpenCancelDialog(true);
      }
    } else {
      setOpenCancelDialog(false);
    }
  };

  const deleteTask = async () => {
    try {
      await APIService.delete(`tasks/${abxTaskId}`, 'token');
      setSnackBar({ message: 'Task deleted', severity: 'success' });
      setOpenSnackBar(true);
      setAbxTaskId('');
    } catch (e) {
      setSnackBar({ message: `Error deleting task: ${e}`, severity: 'error' });
      setOpenSnackBar(true);
    }
    setOpenCancelDialog(false);
  };

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{ message: string; severity: 'error' | 'success' }>({
    message: '',
    severity: 'success',
  });
  const closeSnackBar = (): void => {
    setOpenSnackBar(false);
  };

  return {
    deleteTask,
    openOrCloseDialog,
    openCancelDialog,
    handleGet,
    abxTaskIdError,
    handleChange,
    abxTaskId,
    openSnackBar,
    closeSnackBar,
    message: snackBar.message,
    severity: snackBar.severity,
  };
};

export default useGetOrDeleteTask;
