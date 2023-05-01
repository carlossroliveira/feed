// Packages
import { useNavigate } from 'react-router-dom'

// Components
import { NamePage } from '../NamePage'

// Styles
import {
  ButtonSC,
  ContainerSC,
  DivTwoSC,
  ParagraphSC,
  TitleSC,
} from './errorStyles'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <ContainerSC>
      <NamePage title="Error" />

      <DivTwoSC>
        <TitleSC>Está página não existe!</TitleSC>

        <ParagraphSC>Clique no botão voltar</ParagraphSC>

        <ButtonSC onClick={() => navigate('/')}>voltar</ButtonSC>
      </DivTwoSC>
    </ContainerSC>
  )
}
