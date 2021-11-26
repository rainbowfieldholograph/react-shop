import React from 'react'
import { Route, Routes } from 'react-router'
import Collection from '../../pages/collection/Collection'
import Layout from '../layout/Layout'
import Home from '../../pages/home/Home'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from '../pageNotFound/PageNotFound'
import ProductInfo from '../productInfo/ProductInfo'

const Router = ({ data }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
          {data.map((item, index) => {
            item.products.map((product, index) => {
              console.log(`collections/${item.title}/${product.title}`)
              return (
                <Route
                  key={index + 999}
                  path={`collections/${item.title}/${product.title}`}
                  element={
                    <ProductInfo
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  }
                />
              )
            })
            return (
              <Route
                key={index}
                path={`collections/${item.title}`}
                element={<Collection data={item} />}
              />
            )
          })}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
