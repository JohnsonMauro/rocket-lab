import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';

import ConfirmDetails from './index';

const mockModalData = {
  firstName: 'Sample',
  lastName: 'Sample',
  accountName: 'Sample',
  companyName: 'Sample',
  phone: '0000000000',
  fax: 'Sample',
  title: 'Sample',
  email: 'sample@email.com',
  emailOptOut: false,
  numberAndStreet: 'Sample',
  city: 'Sample',
  state: 'Sample',
  postcode: '2000',
  description: 'Sample',
};

describe('<ConfirmDetails />', () => {
  it('renders ConfirmDetails component', () => {
    const { container } = render(
      <ConfirmDetails details={mockModalData} open={true}></ConfirmDetails>,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
