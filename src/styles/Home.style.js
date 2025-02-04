import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: block;
  margin-top: 2.5rem;
  @media (min-height: 1024px) {
    padding-bottom: 6rem;
    max-width: 900px;
    width: 100%;
    margin: 2.5rem auto;
  }
`;

export const PortraitContainer = styled.div`
  max-width: 15.75rem;
  width: 100%;
  height: 15.75rem;
  border: solid 3px #7eadfc;
  overflow: hidden;
  background-size: cover;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
