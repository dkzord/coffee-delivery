import { api } from '@/lib/axios'
import cart from '@/assets/cart.svg'
import logoImg from '@/assets/logo.svg'
import MapPinImg from '@/assets/mapPin.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '@/contexts/CoffeeProvider'
import { useContextSelector } from 'use-context-selector'

import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const amountItem = useContextSelector(
    CoffeeContext,
    (context) => context.amountItem,
  )
  const [city, setCity] = useState(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude

          api
            .get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            )
            .then((response) => {
              setCity(
                response.data.address.city ||
                  response.data.address.town ||
                  response.data.address.village,
              )
            })
            .catch((error) => {
              console.error('Erro ao obter nome da cidade:', error)
            })
        },
        function (error) {
          console.error('Erro ao obter geolocalização:', error)
        },
      )
    } else {
      console.log('Geolocalização não suportada.')
    }
  }, [])

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logoImg} alt="" />
        </span>
        <S.HeaderOptions>
          <S.Option variant="local">
            <img src={MapPinImg} alt="" />
            <span>{city || 'carregando...'}</span>
          </S.Option>
          <S.Option variant="cart" onClick={() => navigate('/checkout')}>
            <img src={cart} alt="" />
            <S.SpanCart>{amountItem}</S.SpanCart>
          </S.Option>
        </S.HeaderOptions>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
