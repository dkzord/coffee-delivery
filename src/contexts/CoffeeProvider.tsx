import { api } from '@/lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface Coffee {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  createdAt: string
}

interface CoffeeProviderContextType {
  coffees: Coffee[]
}

interface CoffeeProviderProps {
  children: React.ReactNode
}

export const CoffeeContext = createContext({} as CoffeeProviderContextType)

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const fetchCoffee = useCallback(async () => {
    const reponse = await api.get('coffee')

    setCoffees(reponse.data)
  }, [])

  useEffect(() => {
    fetchCoffee()
  }, [])

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
