import ErrorMessage from '../Message/ErrorMessage';
import { SelectStyles } from './styles';

const Select = ({ error, name, options, placeholder }) => (
  <>
    <SelectStyles name={name}>
      <option value="">{placeholder}</option>

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
