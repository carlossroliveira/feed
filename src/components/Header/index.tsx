// Imagens
import igniteLogo from '../../assets/Ignite.svg'

// Styles
import { HeaderSC, ImgSC } from './headerStyles'

export const Header = () => {
  return (
    <HeaderSC>
      <ImgSC src={igniteLogo} alt="Logo do ignite" />
    </HeaderSC>
  )
}
