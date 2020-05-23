import styled from '@emotion/styled';
import Label from '@components/common/Form/Label';

const CheckBoxContainer = styled.div``;

const CheckBoxLabel = styled(Label)`
  cursor: pointer;
  display: flex;

  & input:checked ~ span:after {
    display: block;
  }
`;

const CheckBoxInput = styled.input`
  margin-left: 18px;
  opacity: 0;
  height: 0;
  width: 0;
`;

const CheckBoxSpan = styled.span`
  border: 0.6px solid ${({ theme }) => theme.colors.gainsboro};
  border-radius: 1.6px;
  height: 16px;
  left: 0;
  top: 0;
  width: 16px;

  &:after {
    content: '';
    border: solid ${({ theme }) => theme.colors.success};
    border-width: 0 1px 1px 0;
    display: none;
    height: 10px;
    left: 4px;
    position: relative;
    top: 1px;
    transform: rotate(45deg);
    width: 5px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
`;

export { CheckBoxContainer, CheckBoxInput, CheckBoxLabel, CheckBoxSpan };
