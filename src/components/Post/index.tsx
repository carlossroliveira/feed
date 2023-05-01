// Packages
import { useMemo, useState } from 'react'

// Components
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

// Functions
import {
  deleteComment,
  isCommentTextEmpty,
  formatPublishedDate,
  handleCrateNewComment,
  handleNewCommentChange,
  handleNewCommentInvalid,
  publishedDateRelativeToNow,
} from './functions'

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

  const memoizedContent = useMemo(
    () =>
      content?.map((line) =>
        line.type === 'paragraph' ? (
          <ParagraphSC key={line.content}>{line.content}</ParagraphSC>
        ) : (
          <ParagraphSC key={line.content}>
            <LinkSC href="#">{line.content}</LinkSC>
          </ParagraphSC>
        ),
      ),
    [content],
  )

  const memoizedComments = useMemo(
    () =>
      comments?.map((comment) => (
        <Comment
          key={comment}
          content={comment}
          onDeleteComment={(commentToDelete) =>
            deleteComment(commentToDelete, comments, setComments)
          }
        />
      )),
    [comments],
  )

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
          title={formatPublishedDate(publishedAt)}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow(publishedAt)}
        </TimeSC>
      </HeaderSC>

      <ContentSC>{memoizedContent}</ContentSC>

      <FormSC
        onSubmit={(event) =>
          handleCrateNewComment(
            event,
            comments,
            newCommentText,
            setComments,
            setNewCommentText,
          )
        }
      >
        <StrongFormSC>Deixe seu feedback</StrongFormSC>

        <TextAreaSC
          required
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          onChange={(event) => handleNewCommentChange(event, setNewCommentText)}
        />

        <FooterFormSC>
          <ButtonFormSC
            type="submit"
            disabled={isCommentTextEmpty(newCommentText)}
          >
            Publicar
          </ButtonFormSC>
        </FooterFormSC>
      </FormSC>

      <CommentListSC>{memoizedComments}</CommentListSC>
    </ContainerSC>
  )
}
