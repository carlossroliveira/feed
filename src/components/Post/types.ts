export interface PostProps {
  post: {
    id: number
    author: {
      avatarUrl: string
      name: string
      role: string
    }
    content: {
      type: string
      content: string
    }[]
    publishedAt: Date
  }
}
