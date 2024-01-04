import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Section } from './components/Section'

import * as S from './styles'

export const Home = () => {
  return (
    <div>
      <Header />
      <Section />

      <S.MenuContainer>
        <h1>Nossos cafés</h1>

        <S.MenuList>
          <Card
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={Number(9.9).toFixed(2)}
            tags={['item 1', 'item 2']}
          />
        </S.MenuList>
      </S.MenuContainer>
    </div>
  )
}
