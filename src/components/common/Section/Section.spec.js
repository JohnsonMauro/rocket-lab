import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Section from './index';

describe('<Section />', () => {
  it('Renders the Section component', () => {
    const { container } = render(<Section title="Title Sample">Sample</Section>, {
      wrapper: GlobalsContainer,
    });
    expect(container).toMatchSnapshot();
  });
});
