import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 6rem;

  h1 {
    font: ${(props) => props.theme.font.titleL};
    color: ${(props) => props.theme.color.base.subtitle};
  }
`

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: 3.375rem;
`
