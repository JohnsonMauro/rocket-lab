import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Footer from './index';

describe('<Footer />', () => {
  it('Renders the Footer component', () => {
    const { container } = render(<Footer />, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
