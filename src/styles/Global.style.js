import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $flexD }) => $flexD || "row"};
  gap: ${({ $gap }) => $gap};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  margin-top: ${({ $marginT }) => $marginT};
  margin-bottom: ${({ $marginB }) => $marginB};
  margin-right: ${({ $marginR }) => $marginR};
  margin-left: ${({ $marginL }) => $marginL};

  a {
    width: fit-content;
  }

  @media (min-width: 1024px) {
    align-self: center;
    flex-direction: row !important;
    > * {
      max-width: 50%;
      width: 100%;
    }
  }
`;

export const SectionContainer = styled.section`
  padding: 1rem 1.5rem;
  max-width: 600px;
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    max-width: none !important;
  }
`;

export const ArticleContainer = styled.article`
  text-align: center;
  padding: 2rem 1.5rem;
  color: #333;

  @media (min-width: 1024px) {
    text-align: left;
  }
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
  margin-bottom: 1.5rem;
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
  overflow: hidden;

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
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (min-height: 1024px) {
    position: fixed;
  }
`;

export const SocialIcon = styled.div`
  color: #7eadfc;
  font-size: 2.5rem;

  a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
  }
`;
