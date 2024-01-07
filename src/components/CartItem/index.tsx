import { useTheme } from 'styled-components'
import { Trash } from '@phosphor-icons/react'
import { InputQuantity } from '../InputQuantity'
import { imageCoffee } from '@/utils/imageCoffee'
import { useContextSelector } from 'use-context-selector'
import { CoffeeContext } from '@/contexts/CoffeeProvider'

import * as S from './styles'

interface CardProps {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  amount?: number
  image: string
}

export const CartItem = ({
  id,
  title,
  price,
  amount,
  image,
  description,
  tags,
}: CardProps) => {
  const theme = useTheme()
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

  const removeCoffeeFromCart = useContextSelector(
    CoffeeContext,
    (context) => context.removeCoffeeFromCart,
  )

  const handleAmountLess = () => {
    decrementCoffee(id)
  }

  const handleAmountMore = () => {
    incrementCoffee(id)
  }

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart({
      id,
      title,
      description,
      price: Number(price),
      tags,
      image,
      amount,
    })
  }

  const total = price * (quantity ? quantity.amount : 1)

  return (
    <>
      <S.Container>
        <img
          src={imageCoffee(image)}
          alt="express-icon"
          width={64}
          height={64}
        />

        <S.Warpper>
          <S.OptionsItem>
            <h2>{title}</h2>
            <div>
              <InputQuantity
                quantity={quantity ? quantity.amount : 1}
                decrementQuantity={handleAmountLess}
                incrementQuantity={handleAmountMore}
              />
              <S.TrashButton onClick={handleRemoveCoffeeFromCart}>
                <Trash size={16} color={theme.color.purple} />
                Remover
              </S.TrashButton>
            </div>
          </S.OptionsItem>
          <S.Price>RS {total.toFixed(2)}</S.Price>
        </S.Warpper>
      </S.Container>
      <S.HR />
    </>
  )
}
