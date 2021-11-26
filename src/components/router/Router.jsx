import React from 'react'
import { Route, Routes } from 'react-router'
import Collection from '../../pages/collection/Collection'
import Layout from '../layout/Layout'
import Home from '../../pages/home/Home'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from '../pageNotFound/PageNotFound'

const Router = ({ data }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data={data} />} />
          {data.map((item, index) => {
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
