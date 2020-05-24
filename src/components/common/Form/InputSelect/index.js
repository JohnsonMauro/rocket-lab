import { useField } from 'formik';

import ErrorMessage from '../Message/ErrorMessage';
import Select from '@components/common/Form/Select';

import { ControlGroup, ControlInput } from './styles';

const InputSelect = ({ options, selectName, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <ControlGroup>
        <Select options={options} name={selectName} />
        <ControlInput {...field} {...props} {...meta} />
      </ControlGroup>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </>
  );
};

export default InputSelect;
