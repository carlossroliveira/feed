// Components
import { Post } from '../Post'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

// Styles
import { MainSC, WrapperSC } from './layoutStyles'

// Types
import { posts } from '../../utilityTypes/mock'

export const Layout = () => {
  return (
    <>
      <WrapperSC>
        <Header />

        <SideBar />

        <MainSC>
          {posts?.map((element) => (
            <Post key={element.id} post={element} />
          ))}
        </MainSC>
      </WrapperSC>
    </>
  )
}
