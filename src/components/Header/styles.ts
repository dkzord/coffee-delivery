import styled from 'styled-components'

interface OptionProps {
  variant: 'local' | 'cart'
}

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.color.base.background};
  padding: 2.5rem 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Option = styled.button<OptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  position: relative;

  font: ${(props) => props.theme.font.buttonG};
  padding: 0.5rem 0.625rem;
  border: 0;
  border-radius: 0.375rem;
  background: ${(props) =>
    props.variant === 'local'
      ? props.theme.color.purpleLight
      : props.theme.color.yellowLight};

  img {
    width: 22px;
    height: 22px;
  }

  &:hover {
    opacity: 0.7;
    transition: background-color 0.3s;
  }
`

export const SpanCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -10px;

  color: ${(props) => props.theme.color.base.white};
  background: ${(props) => props.theme.color.yellowDark};
  border-radius: 50%;

  padding: 2px 8px;
  font: ${(props) => props.theme.font.buttonM};
`
