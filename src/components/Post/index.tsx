// Components
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

// Styles
import {
  AuthorSC,
  ButtonFormSC,
  CommentListSC,
  ContainerSC,
  ContentSC,
  DivSC,
  FooterFormSC,
  FormSC,
  HeaderSC,
  LinkSC,
  ParagraphSC,
  SpanSC,
  StrongFormSC,
  StrongSC,
  TextAreaSC,
  TimeSC,
} from './postStyles'

export const Post = () => {
  return (
    <ContainerSC>
      <HeaderSC>
        <AuthorSC>
          <Avatar src="https://github.com/carlossroliveira.png" />

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

      <FormSC>
        <StrongFormSC>Deixe seu feedback</StrongFormSC>

        <TextAreaSC placeholder="Deixe um comentário" />

        <FooterFormSC>
          <ButtonFormSC type="submit">Publicar</ButtonFormSC>
        </FooterFormSC>
      </FormSC>

      <CommentListSC>
        <Comment />

        <Comment />
      </CommentListSC>
    </ContainerSC>
  )
}
