import styled from 'styled-components'

export const WrapperSC = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1ren;

  display: grid;
  gap: 2rem;
  align-items: flex-start;
  grid-template-columns: 256px 1fr;

  @media (max-width: 768px) {
    font-size: 87.5%;

    grid-template-columns: 1fr;
  }
`
