/*
 *  git environment variables are generated in the makefile,
 *  and supplies us with basic information about
 *  the current commit, for use primarily in the web
 *  interface, so testers can tell what build they're looking at.
*/

const gitVariables = [
  'JENIUS_GIT_SHORT_SHA',
  'JENIUS_GIT_AUTHOR',
  'JENIUS_GIT_TAG',
];
const [commitSha, commitAuthor, tag] = gitVariables.map(key => {
  const value = process.env[key];
  return value && JSON.parse(value);
});

export const tagText = () => (tag ? `Tag: ${tag}` : `SHA: ${commitSha}`);

export const buildText = () => `${tagText()} | By: ${commitAuthor}`;
