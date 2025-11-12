import useSWR from "swr";
import "./App.css";
import Card from "./components/Card";

type Book = {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR<Book[]>(
    "http://localhost:3002/api/books",
    fetcher
  );

  if (!data && !error) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {data?.map((item: Book) => (
        <Card
          key={item.id}
          title={item.title}
          author={item.author}
          publishedYear={item.publishedYear}
        />
      ))}
    </div>
  );
}

export default App;
