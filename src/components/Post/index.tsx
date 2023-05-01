// Packages
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

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

// types
import { PostProps } from './types'

export const Post = (post: PostProps) => {
  const {
    post: { author, content, publishedAt },
  } = post

  const [comments, setComments] = useState<string[]>([
    'Post muito bacana, hein?!',
  ])

  const [newCommentText, setNewCommentText] = useState<string>('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCrateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>,
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete,
    )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <ContainerSC>
      <HeaderSC>
        <AuthorSC>
          <Avatar src={author.avatarUrl} />

          <DivSC>
            <StrongSC>{author.name}</StrongSC>
            <SpanSC>{author.role}</SpanSC>
          </DivSC>
        </AuthorSC>

        <TimeSC
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </TimeSC>
      </HeaderSC>

      <ContentSC>
        {content?.map((line) =>
          line.type === 'paragraph' ? (
            <ParagraphSC key={line.content}>{line.content}</ParagraphSC>
          ) : (
            <ParagraphSC key={line.content}>
              <LinkSC href="#">{line.content}</LinkSC>
            </ParagraphSC>
          ),
        )}
      </ContentSC>

      <FormSC onSubmit={handleCrateNewComment}>
        <StrongFormSC>Deixe seu feedback</StrongFormSC>

        <TextAreaSC
          required
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <FooterFormSC>
          <ButtonFormSC type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </ButtonFormSC>
        </FooterFormSC>
      </FormSC>

      <CommentListSC>
        {comments?.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </CommentListSC>
    </ContainerSC>
  )
}
