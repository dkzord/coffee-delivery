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
          <Card title="Mocaccino" />
          <div style={{ background: 'green' }}>item 2</div>
          <div style={{ background: 'green' }}>item 3</div>
          <div style={{ background: 'green' }}>item 4</div>
          <div style={{ background: 'green' }}>item 4</div>
          <div style={{ background: 'green' }}>item 4</div>
        </S.MenuList>
      </S.MenuContainer>
    </div>
  )
}
