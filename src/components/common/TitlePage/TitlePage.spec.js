import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import TitlePage from './index';

describe('<TitlePage />', () => {
  it('Renders the TitlePage component', () => {
    const { container } = render(
      <TitlePage
        title="Title Sample"
        buttons={
          <>
            <Button variant="secondary">Sample</Button>
            <Button>Sample</Button>
          </>
        }
      ></TitlePage>,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
