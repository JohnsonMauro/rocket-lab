import { useField } from 'formik';

import ErrorMessage from '../Message/ErrorMessage';
import { SelectStyles } from './styles';

const Select = ({ options, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <SelectStyles {...field} {...props} {...meta}>
        {!!placeholder && <option value="">{placeholder}</option>}
        {!!options.length &&
          options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.option}
            </option>
          ))}
      </SelectStyles>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </>
  );
};

export default Select;
