import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

export default async function News() {
  const news = await getAllNews();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}
