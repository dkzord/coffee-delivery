import cartCard from '@/assets/cartCard.svg'
import { InputQuantity } from '../InputQuantity'
import { imageCoffee } from '@/utils/imageCoffee'
import { useContextSelector } from 'use-context-selector'
import { CoffeeContext } from '@/contexts/CoffeeProvider'

import * as S from './styles'

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

  const items = useContextSelector(
    CoffeeContext,
    (context) => context.itemQuantity,
  )

  const quantity = items.find((item) => item.id === id)

  const incrementCoffee = useContextSelector(
    CoffeeContext,
    (context) => context.incrementCoffee,
  )

  const decrementCoffee = useContextSelector(
    CoffeeContext,
    (context) => context.decrementCoffee,
  )

  const handleAmountLess = () => {
    decrementCoffee(id)
  }

  const handleAmountMore = () => {
    incrementCoffee(id)
  }

  const handleAddCoffeeToCart = () => {
    addCoffeeToCart({
      id,
      title,
      description,
      price: Number(price),
      tags,
      image,
      amount: quantity?.amount ? quantity.amount : 1,
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
          <InputQuantity
            quantity={quantity ? quantity.amount : 1}
            decrementQuantity={handleAmountLess}
            incrementQuantity={handleAmountMore}
          />
          <S.Button onClick={handleAddCoffeeToCart}>
            <img src={cartCard} alt="" />
          </S.Button>
        </S.CardFooter>
      </S.CardContent>
    </S.CardContainer>
  )
}
