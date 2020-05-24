import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Select from './index';

const mockSelectSample = [
  { value: 1, option: 'Opt 1' },
  { value: 2, option: 'Opt 2' },
  { value: 3, option: 'Opt 3' },
  { value: 4, option: 'Opt 4' },
  { value: 5, option: 'Opt 5' },
  { value: 6, option: 'Opt 6' },
];

describe('<Select />', () => {
  it('Renders the Select component', () => {
    const { container } = render(
      <Select options={mockSelectSample} name="sample" placeholder="Choose below" />,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
