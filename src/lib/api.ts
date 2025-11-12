import { Book } from 'src/types/books';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function fetchBooks(): Promise<Book[]> {
  const res = await fetch(`${BASE_URL}/books`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load books');
  return res.json();
}

export async function fetchBook(id: string): Promise<Book> {
  const res = await fetch(`${BASE_URL}/books/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load book');
  return res.json();
}
