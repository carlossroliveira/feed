import styled from 'styled-components'

export const ContainerSC = styled.article`
  padding: 2.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.GREY_SCALE[800]};

  & + & {
    margin-top: 2rem;
  }
`

export const ContentSC = styled.div`
  line-height: 1.6;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.GREY_SCALE[300]};
`

export const ParagraphSC = styled.p`
  margin-top: 1rem;
`

export const LinkSC = styled.a`
  font-weight: bold;
  text-decoration: none;
  transition: color 0.1s, background-color 0.1s;
  color: ${({ theme }) => theme.GREEN_SCALE[500]};

  &:hover {
    color: ${({ theme }) => theme.GREEN_SCALE[300]};
  }
`

export const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AuthorSC = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const DivSC = styled.div`
  display: block;
  line-height: 1.6;
  color: ${({ theme }) => theme.GREY_SCALE[100]};
`

export const StrongSC = styled.strong`
  display: block;
  line-height: 1.6;
  color: ${({ theme }) => theme.GREY_SCALE[100]};
`
export const SpanSC = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.GREY_SCALE[400]};
`

export const ImgSC = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.GREY_SCALE[800]};
  outline: 4px solid ${({ theme }) => theme.GREEN_SCALE[500]};
`

export const TimeSC = styled.time`
  font-size: 0.875rem;
  color: var(--gray-400);
`
