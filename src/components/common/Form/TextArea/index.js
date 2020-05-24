import { useField } from 'formik';

import ErrorMessage from '../Message/ErrorMessage';
import { TextAreaStyles } from './styles';

const TextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <TextAreaStyles {...field} {...props} {...meta}></TextAreaStyles>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </>
  );
};

export default TextArea;
