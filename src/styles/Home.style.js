import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: block;
  margin-top: 2.5rem;
`;

export const PortraitContainer = styled.div`
  width: 15.75rem;
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
