import { Home } from './pages/home'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CoffeeProvider } from '@/contexts/CoffeeProvider'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CoffeeProvider>
        <Home />
      </CoffeeProvider>
    </ThemeProvider>
  )
}

export default App
