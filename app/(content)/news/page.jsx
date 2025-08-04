import NewsList from "@/components/NewsList";

export default async function News() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const news = await response.json();

  let newsContent;

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}
