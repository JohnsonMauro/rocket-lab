import Link from '@components/common/Form/Link';

import {
  FooterStyles,
  RightReserved,
  LinkContainer,
} from './styles';

const Footer = () => (
  <FooterStyles>
    <RightReserved>
      © 2020 Crunch Accounting. All right reserved.
    </RightReserved>
    <LinkContainer>
      <Link>Privacy Policy</Link>
      <Link>Terms of Service</Link>
    </LinkContainer>
  </FooterStyles>
);

export default Footer;
