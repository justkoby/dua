import { duaPublications } from '../dua-data.js';

export const policyBriefs = duaPublications.map(brief => ({
  ...brief,
  url: `/policy-briefs/#brief-${brief.issue}`,
}));

