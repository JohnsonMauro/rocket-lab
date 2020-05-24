import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';

import HomePage from './index';

describe('<HomePage />', () => {
  it('renders HomePage layout unchanged', () => {
    const { container } = render(<HomePage />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
