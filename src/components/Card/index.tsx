import cartCard from '@/assets/cartCard.svg'
import expressIcon from '@/assets/expressIcon.svg'
import { Minus, Plus } from '@phosphor-icons/react'

import * as S from './styles'
import { useState } from 'react'

interface CardProps {
  title: string
  description: string
  price: string
  tags: string[]
}

export const Card = ({ title, description, price, tags }: CardProps) => {
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
          {tags.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagList>
        <h2>{title}</h2>
        <p>{description}</p>
        <S.CardFooter>
          <S.Price>
            <span>R$</span> {price.replace(/\./g, ',')}
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
