import ErrorMessage from '../Message/ErrorMessage';
import { SelectStyles } from './styles';

const Select = ({ error, name, options, placeholder, onChange, required }) => (
  <>
    <SelectStyles error={error} name={name} onChange={onChange} required={required}>
      {!!placeholder && <option value="">{placeholder}</option>}
      {!!options.length &&
        options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.option}
          </option>
        ))}
    </SelectStyles>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Select;
