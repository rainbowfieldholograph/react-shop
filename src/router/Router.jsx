import { Route, Routes } from 'react-router'
import Collection from '../pages/collection/Collection'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import ProductPage from '../pages/productPage/ProductPage'
import Collections from '../pages/collections/Collections'
import ReturnPolicy from '../pages/returnPolicy/ReturnPolicy'
import Cart from '../pages/cart/Cart'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:collection" element={<Collection />} />
          <Route path="collections/:collection/:product" element={<ProductPage />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
