import React from 'react'
import { useParams } from 'react-router'
import PageNotFound from '../pageNotFound/PageNotFound'
import CollectionsData from '../../store/collectionsStore'
import { observer } from 'mobx-react-lite'

const findProduct = (data, product, collection) => {
  return data
    .find((col) => col.title === collection)
    .products.find((prod) => prod.title === product)
}

const ProductInfo = observer(() => {
  const { data } = CollectionsData
  const { product, collection } = useParams()
  const findedData = findProduct(data, product, collection)
  return findedData ? (
    <div>
      <h1>{findedData.title}</h1>
      <h2>{findedData.price}</h2>
      <img src={findedData.image} alt="product" />
    </div>
  ) : (
    <PageNotFound />
  )
})

export default ProductInfo
