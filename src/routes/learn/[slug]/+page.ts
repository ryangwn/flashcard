import type { PageLoad } from './$types';
import allBooks from '../../../db/map.json';

type BookId = keyof typeof allBooks;

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  const potentialId = extractIdFromSlug(slug);
  
  if (isValidBookId(potentialId)) {
    const book = await loadBook(potentialId);
    return { id: potentialId, book };
  }

  return { id: null, book: null };
};

function extractIdFromSlug(slug: string): string {
  const lastPart = slug.split('-').at(-1) || '';
  return '_' + lastPart.substring(1);
}

function isValidBookId(id: string): id is BookId {
  return id in allBooks;
}

async function loadBook(id: BookId) {
  const module = await import(`../../../db/${allBooks[id]}.json`);
  return module.default;
}
