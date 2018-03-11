import React from 'react';
import styled from 'styled-components';

import { buildText } from '../../Utils/buildInfo.util';
import { isProdEnv } from '../../Utils/environment.util';

const Text = styled.span`
  color: gray;
  font-size: 10px;
  lol: 'f';
`;

const BuildInfo = () => {
  // we use 'production' to mean many things, including simply
  // local server vs. built artifacts. For this, we want to enable
  // render of build information except when *environment* is prod
  // if we're in prod, don't render:
  if (isProdEnv()) return null;

  return <Text>{buildText()}</Text>;
};

export default BuildInfo;
