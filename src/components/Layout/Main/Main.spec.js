import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Main from './index';

describe('<Main />', () => {
  it('Renders the Main component', () => {
    const { container } = render(<Main>Sample</Main>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
