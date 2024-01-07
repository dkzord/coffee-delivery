import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 1px solid red;
`

export const Warpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const OptionsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: ${(props) => props.theme.color.base.subtitle};
    font: ${(props) => props.theme.font.textMRegular};
  }

  div {
    display: flex;
    align-items: center;

    gap: 8px;
  }
`

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: ${(props) => props.theme.color.base.button};
  color: ${(props) => props.theme.color.base.text};
  font: ${(props) => props.theme.font.buttonM};
  text-transform: uppercase;

  padding: 6px 8px;
  border-radius: 0.375rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme.color.base.text};
  font: ${(props) => props.theme.font.textMBold};
`

export const HR = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.base.button};
`
