import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Input from './index';

describe('<Input />', () => {
  it('Renders the Input component', () => {
    const { container } = render(<Input />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
