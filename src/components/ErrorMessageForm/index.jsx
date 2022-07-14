import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

const ErrorMessageForm = ({
  errors,
  name,
  classes = 'text-xs text-red-500 font-semibold tracking-wider mt-1 leading-4',
}) => {
  return <ErrorMessage errors={errors} name={name} render={({ message }) => <p className={classes}>{message}</p>} />;
};

export default ErrorMessageForm;
