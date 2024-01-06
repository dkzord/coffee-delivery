import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CoffeeProvider } from '@/contexts/CoffeeProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CoffeeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CoffeeProvider>
    </ThemeProvider>
  )
}

export default App
