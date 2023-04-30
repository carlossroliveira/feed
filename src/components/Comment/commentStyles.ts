import styled from 'styled-components'

export const CommentSC = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`

export const DivSC = styled.div`
  flex: 1;
`

export const CommentContentSC = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.GRAY_SCALE[700]};
`

export const HeaderSC = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const StrongSC = styled.strong`
  display: block;
  line-height: 1.6;
  font-size: 0.875rem;
`

export const TimeSC = styled.time`
  display: block;
  line-height: 1.6;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.GRAY_SCALE[400]};
`

export const ButtonSC = styled.button`
  border: 0;
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;
  background-color: transparent;
  color: ${({ theme }) => theme.GRAY_SCALE[400]};

  &:hover {
    color: ${({ theme }) => theme.RED_SCALE[500]};
  }
`

export const ParagraphSC = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.GRAY_SCALE[300]};
`

export const FooterSC = styled.footer`
  margin-top: 1rem;
`

export const ButtonFooterSC = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.GRAY_SCALE[400]};
  cursor: pointer;

  display: flex;
  align-items: center;

  border-radius: 2px;

  &:hover {
    color: ${({ theme }) => theme.GREEN_SCALE[300]};
  }

  svg {
    margin-right: 0.5rem;
  }
`

export const SpanSC = styled.span`
  &::before {
    content: '•';
    padding: 0 0.25rem;
  }
`
