import React from 'react'
import { Route, Routes } from 'react-router'
import Collection from '../../pages/collection/Collection'
import Layout from '../layout/Layout'
import Home from '../../pages/home/Home'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from '../../pages/pageNotFound/PageNotFound'
import ProductInfo from '../../pages/productInfo/ProductInfo'
import Collections from '../../pages/collections/Collections'
import ReturnPolicy from '../../pages/returnPolicy/ReturnPolicy'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:collection" element={<Collection />} />
          <Route path="collections/:collection/:product" element={<ProductInfo />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
