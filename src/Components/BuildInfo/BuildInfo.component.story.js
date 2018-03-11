import React from 'react';
import { storiesOf } from '@storybook/react';

import BuildInfo from './BuildInfo.component';

storiesOf('BuildInfo', module)
  .add('test env', () => (
    <BuildInfo
      isProdEnv={false}
      buildText="sHa: vkjd392f | By: Bui Thanh Ba Vuong"
    />
  ))
  .add('production env', () => (
    <BuildInfo isProdEnv buildText="sHa: vkjd392f | By: Bui Thanh Ba Vuong" />
  ));
