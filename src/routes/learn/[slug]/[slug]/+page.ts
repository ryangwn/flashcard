import type { PageLoad } from './$types';
import allBooks from '../../../../db/map.json';

type BookId = keyof typeof allBooks;

export const load: PageLoad = async ({ url, params }) => {
  const potentialId = extractIdFromSlug(url.pathname);
  
  if (isValidBookId(potentialId)) {
    const book = await loadBook(potentialId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unit = book.find((u : any)=> u.name === params.slug)
    return { id: potentialId, unit };
  }

  return { id: null, unit: null };
};

function extractIdFromSlug(slug: string): string {
  const lastPart = slug.split('/').at(-2)?.split('-').at(-1) || '';
  return '_' + lastPart.substring(1);
}

function isValidBookId(id: string): id is BookId {
  return id in allBooks;
}

async function loadBook(id: BookId) {
  const module = await import(`../../../../db/${allBooks[id]}.json`);
  return module.default;
}
