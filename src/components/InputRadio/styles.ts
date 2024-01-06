import styled from 'styled-components'

export const Container = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.color.base.button};
  color: ${(props) => props.theme.color.base.text};
  font: ${(props) => props.theme.font.buttonM};
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.color.base.hover};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme.color.purpleLight};
    border-color: ${(props) => props.theme.color.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`
