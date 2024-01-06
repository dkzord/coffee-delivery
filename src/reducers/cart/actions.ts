import { Coffee, Item } from './reducer'

export enum ActionType {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
}

export type Action =
  | { type: 'ADD_COFFEE'; payload: { coffee: Coffee } }
  | { type: 'REMOVE_COFFEE'; payload: { coffee: Coffee } }
  | { type: 'INCREMENT_COFFEE'; payload: { itemId: Item['id'] } }
  | { type: 'DECREMENT_COFFEE'; payload: { itemId: Item['id'] } }

export function addCoffeeAction(coffee: Coffee): Action {
  return {
    type: ActionType.ADD_COFFEE,
    payload: { coffee },
  }
}

export function removeCoffeeAction(coffee: Coffee): Action {
  return {
    type: ActionType.REMOVE_COFFEE,
    payload: { coffee },
  }
}

export function incrementCoffeeAction(itemId: Item['id']): Action {
  return {
    type: ActionType.INCREMENT_COFFEE,
    payload: { itemId },
  }
}

export function decrementCoffeeAction(itemId: Item['id']): Action {
  return {
    type: ActionType.DECREMENT_COFFEE,
    payload: { itemId },
  }
}
