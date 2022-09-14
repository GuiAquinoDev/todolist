import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const ContentListStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  span {
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
    border-radius: 999px;

    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }
`

interface ContentListStatusProps {
  variant: 'created' | 'completed'
}

export const ContentListStatusStrong = styled.strong<ContentListStatusProps>`
  color: ${(props) =>
    props.variant === 'created'
      ? props.theme['blue-light']
      : props.theme.purple};
  font: 700 0.875rem Inter, sans-serif;
`

interface ContentFormProps {
  variant: 'checked' | 'unchecked'
}

export const ContentFormStyle = styled.div<ContentFormProps>`
  display: grid;
  grid-template-columns: 3.25rem auto 3.25rem;
  align-items: center;

  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.variant === 'checked'
        ? props.theme['gray-500']
        : props.theme['gray-400']};
  transition: border 0.2s;
  margin-bottom: 12px;

  span {
    text-decoration: ${(props) =>
      props.variant === 'checked' ? 'line-through' : 'none'};
    transition: text-decoration 0.2s;
  }

  @media (max-width: 768px) {
    grid-template-columns: 3.25rem auto 2.25rem;

    span {
      word-break: break-all;
    }
  }
`

export const ContentFormEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme['gray-400']};

  img {
    margin-top: 4rem;
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6rem;
  }

  @media (max-width: 768px) {
    strong {
      text-align: justify;
      font-size: 14px;
    }

    span {
      text-align: justify;
      font-size: 12px;
    }
  }
`

export const ContentFormCheckbox = styled(Checkbox.Root)`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.5rem;

  border-radius: 100%;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['blue-light']};
  cursor: pointer;

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['purple-dark']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};
    opacity: 0.2;
    cursor: pointer;
  }

  &:focus {
    box-shadow: none;
  }

  span {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const ContentFormButtonDelete = styled.button`
  margin: 0;
  padding: 0.375rem 0.313rem;
  line-height: 0;
  background-color: transparent;
  color: ${(props) => props.theme['gray-300']};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.danger};
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
  }
`
