import { LabelStyle } from './styles';

const Label = ({ className, children, forControl }) => (
  <LabelStyle className={className} htmlFor={forControl}>
    {children}
  </LabelStyle>
);

export default Label;
