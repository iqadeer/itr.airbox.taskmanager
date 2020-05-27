import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import { AbxTask } from '../../../shared/models/AbxTask';
import { APIService } from '../../../api/ApiService';

export type AbxTaskGetAllResponse = {
  data: AbxTask[];
};

const useGetCallersLatestTask = () => {
  const [state, setState] = useState<{ organisationId: string; callerId: string; accessId: string }>({
    organisationId: '',
    callerId: '',
    accessId: '',
  });
  const [error, setError] = useState<{ organisationId: string; callerId: string; accessId: string }>({
    organisationId: '',
    callerId: '',
    accessId: '',
  });

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{ message: string; severity: 'error' | 'success' }>({
    message: '',
    severity: 'success',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    const message = value ? '' : `${name} is required`;
    setState({ ...state, [name]: value });
    setError({ ...error, [name]: message });
  };
  const isStateValid = (): boolean => {
    const errorState = {
      organisationId: state.organisationId ? '' : `organisation id is required`,
      callerId: state.callerId ? '' : 'caller id is requried',
      accessId: state.accessId ? '' : 'access id is required',
    };

    setError(errorState);

    const valid = errorState.callerId.length === 0 && errorState.organisationId.length === 0;
    return valid;
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isStateValid()) {
      try {
        const config = { headers: { accessId: state.accessId } };
        const result = await APIService.get<AbxTaskGetAllResponse>(
          `tasks/organisations/${state.organisationId}/${state.callerId}/latest`,
          'token',
          config
        );
        setSnackBar({ message: JSON.stringify(result.data), severity: 'success' });
        setOpenSnackBar(true);
        setState({
          organisationId: '',
          callerId: '',
          accessId: '',
        });
        console.log(result.data);
      } catch (e) {
        setSnackBar({ message: `Error getting caller's latest task: ${e}`, severity: 'error' });
        setOpenSnackBar(true);
      }
    }
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
    state,
    error,
    handleChange,
  };
};

export default useGetCallersLatestTask;
