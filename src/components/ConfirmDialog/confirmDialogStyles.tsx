import styled from 'styled-components'

export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5);
`

export const DivSC = styled.div`
  padding: 1rem;
  width: 432px;
  height: 238px;
  border-radius: 8px;

  display: flex;

  background-color: ${({ theme }) => theme.GRAY_SCALE[800]};
`

export const DivContainerSC = styled.div`
  width: 17rem;
  margin: auto;
`

export const TitleSC = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`

export const TextSC = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
`
export const CancelButtonSC = styled.button`
  color: ${({ theme }) => theme.WHITE_SCALE.light};
  padding: 10px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;

  background-color: transparent;

  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ConfirmButtonSC = styled.button`
  color: ${({ theme }) => theme.RED_SCALE[500]};
  background-color: ${({ theme }) => theme.GRAY_SCALE[700]};

  border: none;
  padding: 10px 30px;
  border-radius: 8px;
  cursor: pointer;

  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  color: ${({ theme }) => theme.RED_SCALE[500]};
  background-color: ${({ theme }) => theme.GRAY_SCALE[700]};
`
