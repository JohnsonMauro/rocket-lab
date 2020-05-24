import CrunchAccounting from '@images/crunchaccounting.png';
import { HeaderStyles, HeaderImg } from './styles';

const Header = () => (
  <HeaderStyles>
    <HeaderImg src={CrunchAccounting} alt="Crunch Accounting Logo"></HeaderImg>
  </HeaderStyles>
);

export default Header;
