import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Button from './index';

describe('<Button />', () => {
  it('Renders the primary button component', () => {
    const { container } = render(<Button />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders the secondary button component', () => {
    const { container } = render(<Button variant="secondary" />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
