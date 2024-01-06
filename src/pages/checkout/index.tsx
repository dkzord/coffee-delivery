import { Header } from '@/components/Header'
import { useTheme } from 'styled-components'
import { Radio } from '@/components/InputRadio'
import { InputField } from '@/components/InputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MapPinLine } from '@phosphor-icons/react/dist/ssr'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import { z } from 'zod'
import * as S from './styles'
import { useContextSelector } from 'use-context-selector'
import { CoffeeContext } from '@/contexts/CoffeeProvider'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export const Checkout = () => {
  const theme = useTheme()
  const cartCoffee = useContextSelector(
    CoffeeContext,
    (context) => context.cartCoffee,
  )

  console.log('cartCoffee ===>>', cartCoffee)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    console.log('conteúdo ===>>', data)
  }

  return (
    <div>
      <Header />

      <S.CheckoutContainer>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <S.Title>Complete seu pedido</S.Title>
          <S.OrderContainer>
            <S.HeaderContainer>
              <MapPinLine
                size={22}
                weight="regular"
                color={theme.color.yellowDark}
              />

              <div>
                <h2>Endereço de Entrega</h2>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </S.HeaderContainer>

            <S.AddressForm>
              <InputField
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />
              <InputField
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />

              <InputField
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />

              <InputField
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />

              <InputField
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <InputField
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />

              <InputField
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
            </S.AddressForm>
          </S.OrderContainer>

          <S.OrderContainer>
            <S.HeaderContainer>
              <CurrencyDollar
                size={22}
                weight="regular"
                color={theme.color.purple}
              />

              <div>
                <h2>Endereço de Entrega</h2>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </S.HeaderContainer>
            <S.PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
            </S.PaymentOptions>
          </S.OrderContainer>
        </form>
        <div>
          <S.Title>Cafés selecionados</S.Title>
          <S.PaymentContainer>aaaaaaaa</S.PaymentContainer>
        </div>
      </S.CheckoutContainer>
    </div>
  )
}
