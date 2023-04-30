import styled from 'styled-components'

export const HeaderSC = styled.header`
  display: flex;
  justify-content: center;

  padding: 1.25rem 0;

  background-color: ${({ theme }) => theme.GRAY_SCALE[800]};
`

export const ImgSC = styled.img`
  height: 2rem;
`
