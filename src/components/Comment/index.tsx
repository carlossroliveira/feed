// Packages
import { ThumbsUp, Trash } from 'phosphor-react'

// Components
import { Avatar } from '../Avatar'

// Styles
import {
  ButtonFooterSC,
  ButtonSC,
  CommentContentSC,
  CommentSC,
  DivSC,
  FooterSC,
  HeaderSC,
  ParagraphSC,
  SpanSC,
  StrongSC,
  TimeSC,
} from './commentStyles'

export const Comment = () => {
  return (
    <CommentSC>
      <Avatar hasBorder={false} src="https://github.com/carlossroliveira.png" />

      <DivSC>
        <CommentContentSC>
          <HeaderSC>
            <div>
              <StrongSC>Carlos Oliveira</StrongSC>

              <TimeSC
                title="11 de maio ás 08:13h"
                dateTime="2023-05-11 08:13:00"
              >
                Cerca de 1h atrás
              </TimeSC>
            </div>

            <ButtonSC title="Deletar Comentário">
              <Trash size={20} />
            </ButtonSC>
          </HeaderSC>

          <ParagraphSC>Muito bom Dev, parabéns!!</ParagraphSC>
        </CommentContentSC>

        <FooterSC>
          <ButtonFooterSC>
            <ThumbsUp />
            Aplaudir <SpanSC>20</SpanSC>
          </ButtonFooterSC>
        </FooterSC>
      </DivSC>
    </CommentSC>
  )
}
