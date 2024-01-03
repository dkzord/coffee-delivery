import cart from '@/assets/cart.svg'
import logoImg from '@/assets/logo.svg'
import MapPinImg from '@/assets/mapPin.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.HeaderOptions>
          <S.Option variant="local">
            <img src={MapPinImg} alt="" />
            <span>Porto Alegre</span>
          </S.Option>
          <S.Option variant="cart">
            <img src={cart} alt="" />
            <S.SpanCart>0</S.SpanCart>
          </S.Option>
        </S.HeaderOptions>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
