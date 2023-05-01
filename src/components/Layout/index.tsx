// Components
import { Post } from '../Post'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
import { NamePage } from '../NamePage'

// Styles
import { WrapperSC } from './layoutStyles'

// Types
import { posts } from '../../utilityTypes/mock'

export const Layout = () => {
  return (
    <>
      <Header />
      <NamePage title="Home" />

      <WrapperSC>
        <SideBar />

        <main>
          {posts?.map((element) => (
            <Post key={element.id} post={element} />
          ))}
        </main>
      </WrapperSC>
    </>
  )
}
