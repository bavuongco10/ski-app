import React from 'react';

import { buildText } from '../../Utils/buildInfo.util';
import { isProdEnv } from '../../Utils/environment.util';

const BuildInfo = () => {
  // we use 'production' to mean many things, including simply
  // local server vs. built artifacts. For this, we want to enable
  // render of build information except when *environment* is prod
  // if we're in prod, don't render:
  if (isProdEnv()) return null;

  return <span>{buildText()}</span>;
};

export default BuildInfo;
