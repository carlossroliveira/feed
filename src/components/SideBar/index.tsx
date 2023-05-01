// Packages
import { Moon, Sun } from 'phosphor-react'

// Components
import { Avatar } from '../Avatar'

// Context
import { useMyTheme } from '../../contexts/themes/useMyTheme'

// Styles
import {
  FooterSC,
  ImgSC,
  LinkSC,
  ProfileSC,
  SideBarSC,
  SpanSC,
  StrongSC,
} from './sideBarStyles'

export const SideBar = () => {
  const { handleThemes, themes } = useMyTheme()

  return (
    <SideBarSC>
      <ImgSC
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <ProfileSC>
        <Avatar src="https://github.com/carlossroliveira.png" />

        <StrongSC>Carlos Oliveira</StrongSC>
        <SpanSC>Web Develop</SpanSC>
      </ProfileSC>

      <FooterSC>
        <LinkSC href="#" onClick={() => handleThemes()}>
          {themes.title === 'light' ? <Sun size={20} /> : <Moon size={20} />}
          Mudar tema
        </LinkSC>
      </FooterSC>
    </SideBarSC>
  )
}
