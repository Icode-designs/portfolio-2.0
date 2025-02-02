import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $flexD }) => $flexD || "row"};
  gap: ${({ $gap }) => $gap};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

export const ArticleContainer = styled.article`
  text-align: center;
  padding: 2rem 1.5rem;
  color: #333;
`;

export const BlueText = styled.span`
  color: #7eadfc;
`;

export const ArticleHeader = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const ArticleParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: solid #7eadfc 1px;
  border-radius: 10px;
  background: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #fff;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #7eadfc;
      animation: BtnAnimation 0.5s ease;
    }
  }

  @keyframes BtnAnimation {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
`;

export const FooterContainer = styled.footer`
  background-color: #333;
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  text-align: center;
  color: #fff;
`;
