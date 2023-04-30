// Styles
import {
  AuthorSC,
  ContainerSC,
  ContentSC,
  DivSC,
  HeaderSC,
  ImgSC,
  LinkSC,
  ParagraphSC,
  SpanSC,
  StrongSC,
  TimeSC,
} from './postStyles'

export const Post = () => {
  return (
    <ContainerSC>
      <HeaderSC>
        <AuthorSC>
          <ImgSC
            alt="Imagem de perfil do github"
            src="https://github.com/carlossroliveira.png"
          />

          <DivSC>
            <StrongSC>Carlos Oliveira</StrongSC>
            <SpanSC>Web Develop</SpanSC>
          </DivSC>
        </AuthorSC>

        <TimeSC title="11 de maio ás 08:13h" dateTime="2023-05-11 08:13:00">
          Publicando há 1h
        </TimeSC>
      </HeaderSC>

      <ContentSC>
        <ParagraphSC>Fala galeraa 👋</ParagraphSC>

        <ParagraphSC>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </ParagraphSC>

        <ParagraphSC>
          <LinkSC href="#"> 👉 jane.design/doctorcare</LinkSC>
        </ParagraphSC>

        <ParagraphSC>
          <LinkSC href="#">#novoprojeto #nlw #rocketseat</LinkSC>
        </ParagraphSC>
      </ContentSC>
    </ContainerSC>
  )
}
