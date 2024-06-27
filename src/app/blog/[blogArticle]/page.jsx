import data from "/src/blog.json";
export default function ArticulosBlog({ params }) {
  const { blogArticle } = params;
  const blog = data.find((item) => item.id === blogArticle);

  return (
    <div>
      <h1>{blogArticle}</h1>
    </div>
  );
}
