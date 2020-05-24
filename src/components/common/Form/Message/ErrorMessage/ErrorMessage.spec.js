import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import ErrorMessage from './index';

describe('<ErrorMessage />', () => {
  it('Renders the ErrorMessage component', () => {
    const { container } = render(<ErrorMessage>Invalid</ErrorMessage>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
