// Styles
import { ImgSC } from './avatarStyles'

// Types
import { IAvatarProps } from './types'

export const Avatar = ({ hasBorder = true, ...props }: IAvatarProps) => {
  return <ImgSC hasBorder={hasBorder} src={props.src} {...props} />
}
