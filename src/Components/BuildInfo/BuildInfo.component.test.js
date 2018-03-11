import React from 'react';

import BuildInfo from './BuildInfo.component';

describe('BuildInfo component', () => {
  const buildText = 'Sha: 4fdkff | By: Me';

  it('should renders without crashing', () => {
    const wrapper = shallow(<BuildInfo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return null in production', () => {
    const wrapper = shallow(<BuildInfo isProdEnv buildText={buildText} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return build text when not it production', () => {
    const wrapper = shallow(
      <BuildInfo isProdEnv={false} buildText={buildText} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
