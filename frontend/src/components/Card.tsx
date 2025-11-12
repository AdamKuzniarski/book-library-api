type CardProps = {
  title: string;
  author?: string;
  publishedYear?: number;
};
export default function Card({ title, author, publishedYear }: CardProps) {
  return (
    <div
      className="card"
    >
      <h3 >{title}</h3>
      <p>{author}</p>
      <p>{publishedYear}</p>
    </div>
  );
}
