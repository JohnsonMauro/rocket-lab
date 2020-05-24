import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Link from './index';

describe('<Link />', () => {
  it('Renders the Link component', () => {
    const { container } = render(<Link>Sample</Link>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
