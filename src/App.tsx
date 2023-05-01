// Context
import { useMyTheme } from './contexts/themes/useMyTheme'

// Router
import { DefaultRouter } from './Router'

// Styles
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const { themes } = useMyTheme()

  return (
    <ThemeProvider theme={themes}>
      <DefaultRouter />

      <GlobalStyle />
    </ThemeProvider>
  )
}
