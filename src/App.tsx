import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>corpo</h1>
      <button>aqui</button>
    </ThemeProvider>
  )
}

export default App
