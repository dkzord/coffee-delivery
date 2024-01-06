import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.color.base.button};
  border-radius: 6px;

  background-color: ${(props) => props.theme.color.base.input};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme.color.yellowDark};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme.color.base.button};
  }

  input {
    color: ${(props) => props.theme.color.base.text};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.color.base.label};
    }
  }

  span {
    color: ${(props) => props.theme.color.base.label};
    padding-right: 12px;
    font: ${(props) => props.theme.font.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  font: ${(props) => props.theme.font.textXS};
  font-weight: 400;
  color: red;
`
