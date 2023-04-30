import styled from 'styled-components'

export const SideBarSC = styled.aside`
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.GREY_SCALE[800]};
`

export const ImgSC = styled.img`
  width: 100%;
  height: 4.5rem;
  object-fit: cover;
`

export const ProfileSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: calc(0px - 1.5rem - 6px);
`

export const AvatarSC = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.GREY_SCALE[800]};
  outline: 4px solid ${({ theme }) => theme.GREEN_SCALE[500]};
`

export const StrongSC = styled.strong`
  margin-top: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.GREY_SCALE[100]};
`

export const SpanSC = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.GREY_SCALE[400]};
`

export const FooterSC = styled.footer`
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.GREY_SCALE[600]};
`

export const LinkSC = styled.a`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.GREEN_SCALE[500]};
  border: 1px solid ${({ theme }) => theme.GREEN_SCALE[500]};

  border-radius: 8px;
  height: 3.125rem;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  transition: color 0.1s, background-color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.WHITE_SCALE.light};
    background-color: ${({ theme }) => theme.GREEN_SCALE[500]};
  }
`
