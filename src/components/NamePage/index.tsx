// Packages
import { useEffect } from 'react'

// Types
import { INamePageProps } from './types'

export const NamePage = ({ title }: INamePageProps) => {
  useEffect(() => {
    document.title = `Feed - ${title}`
  }, [title])
  return <></>
}
