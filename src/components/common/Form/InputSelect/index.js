import ErrorMessage from '../Message/ErrorMessage';
import Select from '@components/common/Form/Select';

import { ControlGroup, ControlInput } from './styles';

const InputSelect = ({
  error,
  id,
  maxLength,
  minLength,
  inputName,
  placeholder,
  onChange,
  type,
  selectName,
  options,
}) => (
  <>
    <ControlGroup>
      <Select options={options} name={selectName} />
      <ControlInput
        error={error}
        type={type}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
      />
    </ControlGroup>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default InputSelect;
