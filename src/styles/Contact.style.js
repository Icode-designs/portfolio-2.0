import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30% auto;
  padding: 1rem;
  max-width: 500px;
  align-self: center;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  width: 100%;

  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;

export const FormInput = styled.input`
  padding: 1rem 0.5rem;
  background: none;
  border: none;
  border-bottom: solid #333 1px;
`;

export const FormLabel = styled.label`
  font-style: italic;
`;

export const FormMessage = styled.textarea`
  padding: 1rem 0.5rem;
  background: none;
  border: none;
  border-bottom: solid #333 1px;
`;
