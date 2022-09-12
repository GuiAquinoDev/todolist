import styled from 'styled-components'

export const CreateFormContainer = styled.form`
  width: 100%;
  max-width: 48.1rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  gap: 1rem;
  margin-top: -1.8rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['blue-dark']};
    background-color: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};

    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['blue-light']};
      border: 1px solid ${(props) => props.theme['blue-light']};
      color: ${(props) => props.theme['gray-100']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      justify-content: center;
    }
  }
`
