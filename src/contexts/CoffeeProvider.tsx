import { api } from '@/lib/axios'
import { createContext } from 'use-context-selector'
import { Coffee, cartReducer } from '@/reducers/cart/reducer'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { addCoffeeAction, removeCoffeeAction } from '@/reducers/cart/actions'

interface CoffeeProviderContextType {
  coffees: Coffee[]
  cartCoffee: Coffee[]
  amountItem: number
  addCoffeeToCart: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffee: Coffee) => void
}

interface CoffeeProviderProps {
  children: React.ReactNode
}

export const CoffeeContext = createContext({} as CoffeeProviderContextType)

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [cartCoffee, dispatch] = useReducer(
    cartReducer,
    {
      coffeeItem: [],
    },
    (initialState) => {
      const stateStorage = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (stateStorage) {
        return JSON.parse(stateStorage)
      }

      return initialState
    },
  )

  const [coffees, setCoffees] = useState<Coffee[]>([])
  const amountItem = cartCoffee.coffeeItem.length || 0

  const fetchCoffee = useCallback(async () => {
    const reponse = await api.get('coffee')

    setCoffees(reponse.data)
  }, [])

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeAction(coffee))
  }

  const removeCoffeeFromCart = (coffee: Coffee) => {
    dispatch(removeCoffeeAction(coffee))
  }

  useEffect(() => {
    fetchCoffee()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const stateJson = JSON.stringify(cartCoffee)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJson)
  }, [cartCoffee])

  console.log(cartCoffee.coffeeItem)

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        removeCoffeeFromCart,
        cartCoffee: cartCoffee.coffeeItem,
        amountItem,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
