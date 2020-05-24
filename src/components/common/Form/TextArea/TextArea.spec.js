import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import TextArea from './index';

describe('<TextArea />', () => {
  it('Renders the TextArea component', () => {
    const { container } = render(
      <TextArea id="sample" maxLength="2000" name="sample" rows="5" />,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
