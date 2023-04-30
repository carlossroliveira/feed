import styled, { css } from 'styled-components'

const VALUES_PRIMARY = css`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border: 4px solid ${({ theme }) => theme.GRAY_SCALE[800]};
  outline: 4px solid ${({ theme }) => theme.GREEN_SCALE[500]};
`

const VALUES_SECONDARY = css`
  width: 3rem;
  height: 3rem;
`

export const ImgSC = styled.img<{ hasBorder: boolean }>`
  border-radius: 8px;

  ${({ hasBorder }) => (hasBorder ? VALUES_PRIMARY : VALUES_SECONDARY)};
`
