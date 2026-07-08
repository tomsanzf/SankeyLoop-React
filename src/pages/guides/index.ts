import { GuideArticle } from './types';
import { guide1Article } from './guide1SankeyHistory';
import { guide2Article } from './guide2Thermodynamics';
import { guide3Article } from './guide3Finance';
import { guide4Article } from './guide4Manual';

export * from './types';

export const allGuides: GuideArticle[] = [
  guide1Article,
  guide2Article,
  guide3Article,
  guide4Article
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return allGuides.find(g => g.slug === slug);
}
