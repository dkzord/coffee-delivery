import cart from '@/assets/cartIcon.svg'
import timeIcon from '@/assets/timeIcon.svg'
import coffeeIcon from '@/assets/coffeeIcon.svg'
import sectionLogo from '@/assets/sectionLogo.svg'
import packageIcon from '@/assets/packageIcon.svg'

import * as S from './styles'

export const Section = () => {
  return (
    <S.SectionWarpper>
      <S.SectionContainer>
        <S.SectionInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a
            <br /> qualquer hora
          </p>
          <S.SectionInfoItem>
            <div>
              <S.Circle statusColor="yellowDark">
                <img src={cart} alt="" />
              </S.Circle>
              Compra simples e segura
            </div>
            <div>
              <S.Circle statusColor="brown">
                <img src={packageIcon} alt="" />
              </S.Circle>
              Embalagem mantém o café intacto
            </div>
            <div>
              <S.Circle statusColor="yellow">
                <img src={timeIcon} alt="" />
              </S.Circle>
              Entrega rápida e rastreada
            </div>
            <div>
              <S.Circle statusColor="purple">
                <img src={coffeeIcon} alt="" />
              </S.Circle>
              O café chega fresquinho até você
            </div>
          </S.SectionInfoItem>
        </S.SectionInfo>
        <div>
          <img src={sectionLogo} alt="sectionLogo" />
        </div>
      </S.SectionContainer>
    </S.SectionWarpper>
  )
}
