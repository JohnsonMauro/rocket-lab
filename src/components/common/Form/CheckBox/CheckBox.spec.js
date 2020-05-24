import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import CheckBox from './index';

describe('<CheckBox />', () => {
  it('Renders the checkBox component', () => {
    const { container } = render(
      <CheckBox forControl="checkTest" id="checkTest" label="test check box" name="checkTest" />,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
