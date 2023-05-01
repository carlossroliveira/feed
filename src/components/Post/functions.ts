import ptBR from 'date-fns/locale/pt-BR'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  InvalidEvent,
  SetStateAction,
} from 'react'
import { format, formatDistanceToNow } from 'date-fns'

export const formatPublishedDate = (publishedAt: Date) =>
  format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

export const publishedDateRelativeToNow = (publishedAt: Date) =>
  formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

export const isCommentTextEmpty = (commentText: string): boolean => {
  return commentText.trim().length === 0
}

export const handleNewCommentInvalid = (
  event: InvalidEvent<HTMLTextAreaElement>,
) => {
  event.target.setCustomValidity('Esse campo é obrigatório!')
}

export const handleNewCommentChange = (
  event: ChangeEvent<HTMLTextAreaElement>,
  setNewCommentText: Dispatch<SetStateAction<string>>,
) => {
  event.target.setCustomValidity('')
  setNewCommentText(event.target.value)
}

export const handleCrateNewComment = (
  event: FormEvent,
  comments: string[],
  newCommentText: string,
  setComments: (value: SetStateAction<string[]>) => void,
  setNewCommentText: (value: SetStateAction<string>) => void,
) => {
  event.preventDefault()

  setComments([...comments, newCommentText])
  setNewCommentText('')
}

export const deleteComment = (
  commentToDelete: string,
  comments: string[],
  setComments: Dispatch<SetStateAction<string[]>>,
) => {
  const commentsWithoutDeletedOne = comments.filter(
    (comment) => comment !== commentToDelete,
  )

  setComments(commentsWithoutDeletedOne)
}
