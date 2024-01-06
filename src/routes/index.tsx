import { Home } from '@/pages/home'
import { Page404 } from '@/pages/404'
import { Checkout } from '@/pages/checkout'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  )
}
