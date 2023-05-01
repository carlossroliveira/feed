// Imagens
import igniteLogo from '../../assets/Ignite.svg'

// Styles
import { HeaderSC, ImgSC, TitleSC } from './headerStyles'

export const Header = () => {
  return (
    <HeaderSC>
      <ImgSC src={igniteLogo} alt="Logo do ignite" /> <TitleSC>Feed</TitleSC>
    </HeaderSC>
  )
}
