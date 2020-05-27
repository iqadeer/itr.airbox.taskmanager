import { useState, FormEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskGetAllResponse = {
  data: AbxTask[];
};

const useGeAllTasks = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const result = await APIService.get<AbxTaskGetAllResponse>(`tasks`, 'token');
      setSnackBar({ message: JSON.stringify(result.data), severity: 'success' });
      setOpenSnackBar(true);
      console.log(result.data);
    } catch (e) {
      setSnackBar({ message: `Error getting all tasks: ${e}`, severity: 'error' });
      setOpenSnackBar(true);
    }
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
    handleSubmit,
    openSnackBar,
    closeSnackBar,
    message: snackBar.message,
    severity: snackBar.severity,
  };
};

export default useGeAllTasks;
