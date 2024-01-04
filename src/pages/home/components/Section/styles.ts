import styled from 'styled-components'
import bg from '@/assets/sectionBg.svg'

const STATUS_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellowDark',
  brown: 'brown',
  purple: 'purple',
} as const

interface CircleProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const SectionWarpper = styled.div`
  min-height: 544px; /* ANALISAR */
  display: flex;
  align-items: center;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font: ${(props) => props.theme.font.titleXL};
    color: ${(props) => props.theme.color.base.title};
  }

  p {
    font: ${(props) => props.theme.font.textLRegular};
    color: ${(props) => props.theme.color.base.subtitle};

    margin-top: 1rem;
  }
`

export const SectionInfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font: ${(props) => props.theme.font.textMRegular};
  }
`

export const Circle = styled.div<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.color[STATUS_COLORS[props.statusColor]]};
  border-radius: 50%;
  padding: 6px 8px;

  img {
    width: 16px;
    height: 16px;
  }
`
