import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import InputSelect from './index';

const mockSelectSample = [
  { value: 1, option: 'Opt 1' },
  { value: 2, option: 'Opt 2' },
];

describe('<InputSelect />', () => {
  it('Renders the InputSelect component', () => {
    const { container } = render(
      <InputSelect
        type="text"
        id="sample"
        maxLength="20"
        minLength="3"
        name="sample"
        placeholder="Sample"
        options={mockSelectSample}
        selectName="sample"
      ></InputSelect>,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
