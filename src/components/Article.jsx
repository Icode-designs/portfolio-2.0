import React from "react";
import {
  ArticleContainer,
  ArticleHeader,
  ArticleParagraph,
} from "styles/Global.style";

const Article = ({ headerText, headerParagraph, children }) => {
  return (
    <ArticleContainer>
      <ArticleHeader>{headerText}</ArticleHeader>
      <ArticleParagraph>{headerParagraph}</ArticleParagraph>
      {children}
    </ArticleContainer>
  );
};

export default Article;
