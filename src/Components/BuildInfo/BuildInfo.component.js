import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildText } from '../../Utils/buildInfo.util';
import { isProdEnv } from '../../Utils/environment.util';

const Text = styled.span`
  color: gray;
  font-size: 0.8em;
`;

const BuildInfo = ({ isProdEnv, buildText }) => {
  // we use 'production' to mean many things, including simply
  // local server vs. built artifacts. For this, we want to enable
  // render of build information except when *environment* is prod
  // if we're in prod, don't render:
  if (isProdEnv) return null;

  return <Text>{buildText}</Text>;
};

BuildInfo.propTypes = {
  isProdEnv: PropTypes.bool,
  buildText: PropTypes.string,
};

BuildInfo.defaultProps = {
  isProdEnv: isProdEnv(),
  buildText: buildText(),
};

export default BuildInfo;
