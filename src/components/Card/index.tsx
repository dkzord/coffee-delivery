import cartCard from '@/assets/cartCard.svg'
import expressIcon from '@/assets/expressIcon.svg'
import { Minus, Plus } from '@phosphor-icons/react'

import * as S from './styles'
import { useState } from 'react'

interface CardProps {
  title: string
}

export const Card = ({ title }: CardProps) => {
  const [amount, setAmount] = useState(1)

  const handleAmountLess = () => {
    if (amount === 1) return

    setAmount(amount - 1)
  }

  const handleAmountMore = () => {
    if (amount === 10) return

    setAmount(amount + 1)
  }

  return (
    <S.CardContainer>
      <S.CardImage>
        <img src={expressIcon} alt="express-icon" />
      </S.CardImage>
      <S.CardContent>
        <S.TagList>
          <S.Tag>AQUI</S.Tag>
          <S.Tag>AQUI</S.Tag>
        </S.TagList>
        <h1>{title}</h1>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
        <S.CardFooter>
          <S.Price>
            <span>R$</span> 4,50
          </S.Price>
          <S.Amount>
            <button onClick={handleAmountLess}>
              <Minus size={14} />
            </button>
            <input type="number" readOnly value={amount} min="1" max="10" />
            <button onClick={handleAmountMore}>
              <Plus size={14} />
            </button>
          </S.Amount>
          <S.Button>
            <img src={cartCard} alt="" />
          </S.Button>
        </S.CardFooter>
      </S.CardContent>
    </S.CardContainer>
  )
}
