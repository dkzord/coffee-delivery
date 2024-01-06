import { produce } from 'immer'
import { Action, ActionType } from './actions'

export interface Coffee {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  amount?: number
  image: string
}

interface CoffeeState {
  coffeeItem: Coffee[]
}

export function cartReducer(state: CoffeeState, action: Action): CoffeeState {
  switch (action.type) {
    case ActionType.ADD_COFFEE:
      return produce(state, (draft) => {
        draft.coffeeItem.push(action.payload.coffee)
      })
    case ActionType.REMOVE_COFFEE:
      return produce(state, (draft) => {
        draft.coffeeItem = draft.coffeeItem.filter(
          (coffee) => coffee.id !== action.payload.coffee.id,
        )
      })
    default:
      return state
  }
}
