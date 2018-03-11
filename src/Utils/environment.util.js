/* eslint-disable import/prefer-default-export */
// TODO: Remove eslint-disable prefer-default-export after add more utils

import Configs from '../Configs/env.config';

export const isProdEnv = () => {
  // This indicates the downstream environment targeted by the build:
  return Configs.env === 'production';
};
