import { Coffee } from './reducer'

export enum ActionType {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export type Action =
  | { type: 'ADD_COFFEE'; payload: { coffee: Coffee } }
  | { type: 'REMOVE_COFFEE'; payload: { coffee: Coffee } }

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
