import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.5rem;

  h1 {
    font: ${(props) => props.theme.font.titleXL};
    padding-bottom: 2rem;
  }
`
