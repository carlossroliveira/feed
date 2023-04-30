// Packages
import { PencilLine } from 'phosphor-react'

// Components
import { Avatar } from '../Avatar'

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
        <LinkSC href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </LinkSC>
      </FooterSC>
    </SideBarSC>
  )
}
