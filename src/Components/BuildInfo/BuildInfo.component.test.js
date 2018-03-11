import React from 'react';

import BuildInfo from './BuildInfo.component';

it('renders without crashing', () => {
  const wrapper = shallow(<BuildInfo />);
  expect(wrapper).toMatchSnapshot();
});
