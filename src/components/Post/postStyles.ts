import styled from 'styled-components'

export const ContainerSC = styled.article`
  padding: 2.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.GRAY_SCALE[800]};

  & + & {
    margin-top: 2rem;
  }
`

export const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AuthorSC = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`
export const DivSC = styled.div`
  display: block;
  line-height: 1.6;
  color: ${({ theme }) => theme.GRAY_SCALE[100]};
`

export const StrongSC = styled.strong`
  display: block;
  line-height: 1.6;
  color: ${({ theme }) => theme.GRAY_SCALE[100]};
`
export const SpanSC = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.GRAY_SCALE[400]};
`

export const TimeSC = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.GRAY_SCALE[400]};
`

export const ContentSC = styled.div`
  line-height: 1.6;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.GRAY_SCALE[300]};
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

export const FormSC = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.GRAY_SCALE[600]};
`

export const StrongFormSC = styled.strong`
  line-height: 1.6;
  color: ${({ theme }) => theme.GRAY_SCALE[100]};
`

export const TextAreaSC = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.GRAY_SCALE[900]};
  border: 0;
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.GRAY_SCALE[100]};
  line-height: 1.4;
  margin-top: 1rem;
`

export const FooterFormSC = styled.footer`
  visibility: hidden;
  max-height: 0;

  ${FormSC}:focus-within > & {
    visibility: visible;
    max-height: none;
  }
`

export const ButtonFormSC = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: ${({ theme }) => theme.GREEN_SCALE[500]};
  color: ${({ theme }) => theme.WHITE_SCALE.light};
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.1s;

  &:not([disabled]):hover {
    background-color: ${({ theme }) => theme.GREEN_SCALE[300]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CommentListSC = styled.div`
  margin-top: 2rem;
`
