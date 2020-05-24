import React from 'react';
import { render } from '@testing-library/react';

import GlobalsContainer from '@test/GlobalsContainer';
import Modal from './index';
import Check from '@svg/check.svg';

const isOpen = false;

describe('<Modal />', () => {
  it('Renders the Modal component when is close', () => {
    const { container } = render(
      <Modal icon={Check} subTitle="Title sample for modal" title="Sample" initialOpened={isOpen}>
        Sample
      </Modal>,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });

  it('Renders the Modal component when is open', () => {
    const { container } = render(
      <Modal icon={Check} subTitle="Title sample for modal" title="Sample" initialOpened={!isOpen}>
        Sample
      </Modal>,
      {
        wrapper: GlobalsContainer,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
