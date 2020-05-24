import { useField } from 'formik';

import ErrorMessage from '../Message/ErrorMessage';
import { InputStyles } from './styles';

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <InputStyles {...field} {...props} {...meta} />
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </>
  );
};

export default Input;
