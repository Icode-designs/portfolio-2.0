import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1.5rem 1rem;
  text-align: center;
  color: #333;
  max-width: 1024px;
  margin: auto;
  margin-top: 1.5rem;

  & > h1 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
