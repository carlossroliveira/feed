// Packages
import 'styled-components'

// Types
import ThemeType from '../utilityTypes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
