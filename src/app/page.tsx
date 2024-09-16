import Content from "./components/content/content";
import articlesJson from "./articles.json";

import { ArticleData } from "./components/content/contentTypes";

export default function Home() {
  const articles: ArticleData["articles"] = articlesJson;

  return (
    <div className="flex flex-col">
      {articles.map((article) => {
        return <Content key={article.title} {...article} />;
      })}
    </div>
  );
}
