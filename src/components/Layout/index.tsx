// Components
import { Header } from '../Header'
import { SideBar } from '../SideBar'

// Styles
import { WrapperSC } from './layoutStyles'

export const Layout = () => {
  return (
    <>
      <Header />

      <WrapperSC>
        <SideBar />

        <main>
          <p>main</p>
        </main>
      </WrapperSC>
    </>
  )
}
