import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskGetAllResponse = {
  data: AbxTask[];
};

const useGetAllOrganisationTasks = () => {
  const [organisation, setOrganisation] = useState<number | string>('');

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{ message: string; severity: 'error' | 'success' }>({
    message: '',
    severity: 'success',
  });

  const [error, setError] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const message = organisation ? '' : 'Organisation id is required';
    setError(message);
    if (!message) {
      try {
        const result = await APIService.get<AbxTaskGetAllResponse>(`tasks/organisations/${organisation}`, 'token');
        setSnackBar({ message: JSON.stringify(result.data), severity: 'success' });
        setOpenSnackBar(true);
        setOrganisation('');
        console.log(result.data);
      } catch (e) {
        setSnackBar({ message: `Error getting organisation tasks: ${e}`, severity: 'error' });
        setOpenSnackBar(true);
      }
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const message = e.target.value ? '' : 'Organisation id is required';
    setError(message);
    setOrganisation(e.target.value);
  };

  const closeSnackBar = (): void => {
    setOpenSnackBar(false);
  };

  return {
    handleSubmit,
    openSnackBar,
    closeSnackBar,
    message: snackBar.message,
    severity: snackBar.severity,
    organisation,
    handleChange,
    error,
  };
};

export default useGetAllOrganisationTasks;
