// Components
import { Post } from '../Post'
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
          <Post />
        </main>
      </WrapperSC>
    </>
  )
}
