// Packages
import { useContext } from 'react'

// Context
import { MyThemeContext } from './MyThemeContext'

export const useMyTheme = () => {
  const context = useContext(MyThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside MyThemeProvider')
  }
  return context
}
