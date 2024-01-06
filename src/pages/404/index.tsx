import error from '@/assets/Error.jpg'

import * as S from './styles'

export const Page404 = () => {
  return (
    <>
      <S.ErrorContainer>
        <h1>Ops! Tivemos um problema.</h1>

        <img src={error} alt="Error" width={1020} height={860} />
      </S.ErrorContainer>
    </>
  )
}
