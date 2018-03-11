import React from 'react';

import HeaderReact from './HeaderReact.component';

describe('HeaderReact component', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(<HeaderReact />);
    expect(wrapper).toMatchSnapshot();
  });
});
