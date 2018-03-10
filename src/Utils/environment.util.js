/* eslint-disable import/prefer-default-export */
// TODO: Remove eslint-disable prefer-default-export after add more utils

export const isProdEnv = () => {
  // This indicates the downstream environment targeted by the build:
  return process.env.NODE_ENV === 'production';
};
