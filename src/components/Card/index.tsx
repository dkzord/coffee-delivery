import cartCard from '@/assets/cartCard.svg'
import { Minus, Plus } from '@phosphor-icons/react'

import * as S from './styles'
import { useState } from 'react'
import { imageCoffee } from '@/utils/imageCoffee'
import { useContextSelector } from 'use-context-selector'
import { CoffeeContext } from '@/contexts/CoffeeProvider'

interface CardProps {
  id: number
  title: string
  description: string
  price: string
  tags: string[]
  image: string
}

export const Card = ({
  id,
  title,
  description,
  price,
  tags,
  image,
}: CardProps) => {
  const addCoffeeToCart = useContextSelector(
    CoffeeContext,
    (context) => context.addCoffeeToCart,
  )

  const [amount, setAmount] = useState(1)

  const handleAmountLess = () => {
    if (amount === 1) return

    setAmount(amount - 1)
  }

  const handleAmountMore = () => {
    if (amount === 10) return

    setAmount(amount + 1)
  }

  const handleAddCoffeeToCart = () => {
    addCoffeeToCart({
      id,
      title,
      description,
      price: Number(price),
      tags,
      image,
      amount,
    })
  }

  return (
    <S.CardContainer>
      <S.CardImage>
        <img src={imageCoffee(image)} alt="express-icon" />
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
          <S.Button onClick={handleAddCoffeeToCart}>
            <img src={cartCard} alt="" />
          </S.Button>
        </S.CardFooter>
      </S.CardContent>
    </S.CardContainer>
  )
}
