import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
