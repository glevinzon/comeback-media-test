"use client";

import { useState } from "react";
import Content from "./components/content/content";
import articlesJson from "./articles.json";
import { ArticleData } from "./components/content/contentTypes";
import ProgressBar from "./components/content/progressBar";

export default function Home() {
  const [readProgress, setReadProgress] = useState(0);
  const [articlesVisible, setArticlesVisible] = useState<
    ArticleData["articles"]
  >([articlesJson[0]]);

  const handleLoadNextArticle = (articleId: number) => {
    const nextArticleId = articleId;
    if (!articlesVisible[nextArticleId] && articlesJson[articleId]) {
      setArticlesVisible([...articlesVisible, articlesJson[articleId]]);
    }
  };

  return (
    <div className="flex flex-col">
      <ProgressBar percent={readProgress} />
      {articlesVisible.map((article, index) => {
        return (
          <Content
            key={article.title}
            {...article}
            articleIndex={index}
            loadNextArticleCb={handleLoadNextArticle}
            setReadProgressCb={(val) => {
              setReadProgress(val);
            }}
          />
        );
      })}
    </div>
  );
}
