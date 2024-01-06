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

export interface Item {
  id: number
  amount: number
}

interface CoffeeState {
  coffeeItem: Coffee[]
  item: Item[]
}

export function cartReducer(state: CoffeeState, action: Action): CoffeeState {
  switch (action.type) {
    case ActionType.ADD_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeItem.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id,
        )

        if (coffeeIndex >= 0) {
          draft.coffeeItem[coffeeIndex].amount = draft.item[coffeeIndex].amount
        } else {
          draft.coffeeItem.push(action.payload.coffee)
        }
      })
    case ActionType.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeItem.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id,
        )

        draft.coffeeItem.splice(coffeeIndex, 1)
      })
    case ActionType.INCREMENT_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.item.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        if (coffeeIndex >= 0) {
          draft.item[coffeeIndex].amount += 1
        } else {
          draft.item.push({
            id: action.payload.itemId,
            amount: 1,
          })
        }
      })
    case ActionType.DECREMENT_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.item.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        if (coffeeIndex >= 0 && draft.item[coffeeIndex].amount > 1) {
          draft.item[coffeeIndex].amount -= 1
        } else {
          draft.item.push({
            id: action.payload.itemId,
            amount: 1,
          })
        }
      })
    default:
      return state
  }
}
