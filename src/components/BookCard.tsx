import Link from 'next/link';
import { Book } from '@/types/book';

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="mb-2 text-sm text-gray-500">{book.author}</div>
      <h3 className="text-lg font-semibold">{book.title}</h3>
      {book.publishedYear && (
        <div className="mt-1 text-xs text-gray-500">
          Year: {book.publishedYear}
        </div>
      )}
      <Link
        href={`/books/${book.id}`}
        className="mt-3 inline-block text-blue-600 hover:underline"
      >
        Details
      </Link>
    </div>
  );
}
