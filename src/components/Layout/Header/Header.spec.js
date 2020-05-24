import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Header from './index';

describe('<Header />', () => {
  it('Renders the Header component', () => {
    const { container } = render(<Header />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
