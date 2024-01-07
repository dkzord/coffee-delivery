import styled from 'styled-components'

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.color.base.button};
  gap: 0.25rem;
  border-radius: 6px;
  padding: 8px;

  width: 72px;
  height: 32px;

  input {
    font: ${(props) => props.theme.font.textMRegular};
    width: 16px;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    text-align: center;
    cursor: inherit;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3px 2px;
    border: none;
    aspect-ratio: 1;
    font-size: 1.4rem;
    background: transparent;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.color.purple};
    }
  }
`
