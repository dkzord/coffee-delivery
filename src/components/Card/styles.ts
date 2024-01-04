import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.color.base.card};

  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;

  padding: 1.25rem 1.25rem 0 1.25rem;
  max-height: 290px;
`

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -2.625rem;
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  top: -2.625rem;

  h1 {
    font: ${(props) => props.theme.font.titleS};
    color: ${(props) => props.theme.color.base.subtitle};
    margin: 0;
  }

  p {
    font: ${(props) => props.theme.font.textS};
    color: ${(props) => props.theme.color.base.label};
    margin: 0;

    text-align: center;
    margin-top: 0.5rem;
  }
`

export const TagList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const Tag = styled.div`
  font: ${(props) => props.theme.font.tag};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.yellowDark};
  background: ${(props) => props.theme.color.yellowLight};

  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 1rem;
`

export const Price = styled.div`
  font: ${(props) => props.theme.font.titleM};
  color: ${(props) => props.theme.color.base.text};

  span {
    font-size: 16px;
    font-weight: 400;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.color.purpleDark};

  img {
    width: 22px;
    height: 22px;
  }
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.color.base.button};
  gap: 0.25rem;
  border-radius: 6px;
  padding: 8px;

  input {
    font: ${(props) => props.theme.font.textMRegular};
    width: 1.875rem;
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
