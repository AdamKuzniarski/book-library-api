type CardProps = {
  title: string;
  author?: string;
  publishedYear?: number;
};
export default function Card({ title, author, publishedYear }: CardProps) {
  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{author}</p>
      <p className="text-gray-600">{publishedYear}</p>
    </div>
  );
}
