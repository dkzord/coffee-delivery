import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Section } from './components/Section'
import { useContextSelector } from 'use-context-selector'
import { CoffeeContext } from '@/contexts/CoffeeProvider'

import * as S from './styles'

export const Home = () => {
  const coffeeList = useContextSelector(
    CoffeeContext,
    (context) => context.coffees,
  )

  return (
    <div>
      <Header />
      <Section />

      <S.MenuContainer>
        <h1>Nossos cafés</h1>

        <S.MenuList>
          {coffeeList.map((coffee) => (
            <Card
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price.toFixed(2)}
              tags={coffee.tags}
            />
          ))}
        </S.MenuList>
      </S.MenuContainer>
    </div>
  )
}
