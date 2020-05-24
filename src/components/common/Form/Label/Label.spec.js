import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Label from './index';

describe('<Label />', () => {
  it('Renders the Label component', () => {
    const { container } = render(<Label forControl="sample">Sample</Label>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
