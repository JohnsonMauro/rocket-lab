import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';

import Page from './Page';

describe('<Page />', () => {
  it('renders Page layout unchanged', () => {
    const { container } = render(<Page />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
