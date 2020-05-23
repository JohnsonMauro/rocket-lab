import { CheckBoxInput, CheckBoxLabel, CheckBoxSpan } from './styles';

const CheckBox = ({ forControl, id, label, name, value }) => (
  <CheckBoxLabel forControl={forControl}>
    {label}
    <CheckBoxInput type="checkbox" id={id} name={name} value={value}></CheckBoxInput>
    <CheckBoxSpan></CheckBoxSpan>
  </CheckBoxLabel>
);

export default CheckBox;
