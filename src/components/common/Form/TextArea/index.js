import ErrorMessage from '../Message/ErrorMessage';
import { TextAreaStyles } from './styles';

const TextArea = ({ error, id, maxLength, minLength, name, onChange, required, rows }) => (
  <>
    <TextAreaStyles
      error={error}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      onChange={onChange}
      required={required}
      rows={rows}
    ></TextAreaStyles>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default TextArea;
