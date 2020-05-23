import ErrorMessage from '../Message/ErrorMessage';
import { InputStyles } from './styles';

const Input = ({
  className,
  error,
  id,
  maxLength,
  minLength,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <>
    <InputStyles
      className={className}
      error={error}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    ></InputStyles>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Input;