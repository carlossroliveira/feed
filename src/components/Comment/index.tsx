// Packages
import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

// Components
import { Avatar } from '../Avatar'
import { ConfirmDialog } from '../ConfirmDialog'

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

// Types
import { ICommentProps } from './types'

export const Comment = ({ content, onDeleteComment }: ICommentProps) => {
  const [likeCount, setLikeCount] = useState<number>(0)

  const [IsOpen, setIsOpen] = useState<boolean>(false)

  return (
    <CommentSC>
      <ConfirmDialog
        open={IsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => onDeleteComment(content)}
      />

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

            <ButtonSC
              title="Deletar Comentário"
              onClick={() => setIsOpen(true)}
            >
              <Trash size={20} />
            </ButtonSC>
          </HeaderSC>

          <ParagraphSC>{content}</ParagraphSC>
        </CommentContentSC>

        <FooterSC>
          <ButtonFooterSC onClick={() => setLikeCount((prev) => prev + 1)}>
            <ThumbsUp />
            Aplaudir <SpanSC>{likeCount}</SpanSC>
          </ButtonFooterSC>
        </FooterSC>
      </DivSC>
    </CommentSC>
  )
}
