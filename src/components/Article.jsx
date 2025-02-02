import React from "react";
import {
  ArticleContainer,
  ArticleHeader,
  ArticleParagraph,
} from "styles/Global.style";

const Article = ({ headerText, headerParagraph }) => {
  return (
    <ArticleContainer>
      <ArticleHeader>{headerText}</ArticleHeader>
      <ArticleParagraph>{headerParagraph}</ArticleParagraph>
    </ArticleContainer>
  );
};

export default Article;
