import styled from 'styled-components'
import { STYLES_DEFAULT, animate } from './styleUtils'

export const ContainerSC = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.GRAY_SCALE[800]};
`

export const TitleSC = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.GREEN_SCALE[300]};
`

export const ParagraphSC = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.GREEN_SCALE[300]};
`

export const ButtonSC = styled.button`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.GREEN_SCALE[500]};
  color: ${({ theme }) => theme.WHITE_SCALE.light};
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    animation: ${animate} 3s linear infinite;
  }

  &:hover {
    background-color: ${({ theme }) => theme.GREEN_SCALE[300]};
  }
`
