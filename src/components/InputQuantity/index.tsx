import { Minus, Plus } from '@phosphor-icons/react'
import * as S from './styles'

type InputQuantityProps = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export const InputQuantity = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: InputQuantityProps) => {
  return (
    <S.Amount>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <input type="number" readOnly value={quantity} min="1" max="10" />
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </S.Amount>
  )
}
