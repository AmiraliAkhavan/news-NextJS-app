import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function News() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
