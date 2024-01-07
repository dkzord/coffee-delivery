import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 10px;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.5rem;
`

export const Title = styled.h1`
  font: ${(props) => props.theme.font.titleXS};
  color: ${(props) => props.theme.color.base.subtitle};
`

export const BaseContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.base.card};
  border-radius: 0.375rem;
  padding: 2.5rem;
  margin-top: 0.9375rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    h2 {
      color: ${(props) => props.theme.color.base.subtitle};
      font: ${(props) => props.theme.font.textMRegular};
    }

    span {
      color: ${(props) => props.theme.color.base.text};
      font: ${(props) => props.theme.font.textS};
    }
  }

  margin-bottom: 2rem;
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const OrderContainer = styled(BaseContainer)``

export const PaymentContainer = styled(BaseContainer)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const OrderCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    span {
      color: ${(props) => props.theme.color.base.text};
      font: ${(props) => props.theme.font.textS};
    }

    h2 {
      color: ${(props) => props.theme.color.base.subtitle};
      font: ${(props) => props.theme.font.textLBold};
    }
  }
`

export const ButtonConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  border: none;
  background: ${(props) => props.theme.color.yellow};
  color: ${(props) => props.theme.color.base.white};
  font: ${(props) => props.theme.font.buttonG};
  text-transform: uppercase;

  padding: 12px 8px;
  border-radius: 0.375rem;
  margin-top: 2rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
