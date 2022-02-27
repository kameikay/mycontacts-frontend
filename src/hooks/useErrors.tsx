import { useState } from 'react';

interface IErrors {
  field: string;
  message: string;
}

export function useErrors() {
  const [errors, setErrors] = useState<IErrors[]>([]);

  function setError({ field, message }: IErrors) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevState) => [
      ...prevState,
      {
        field,
        message,
      },
    ]);
  }

  function removeError(fieldName: string) {
    setErrors(
      (prevState: IErrors[]) => prevState.filter((error: IErrors) => error.field !== fieldName),
    );
  }

  function getErrorMessageByFieldName(fieldname: string) {
    return errors.find((error) => error.field === fieldname)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
