import styled from "styled-components";

export const FeaturedProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  padding: 1.5rem 1rem;
  text-align: center;
  color: #333;
  margin-top: 2rem;

  & > h1 {
    margin-bottom: 0.5rem;
  }
`;

export const ProjectImgContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: solid #7eadfc 3px;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
