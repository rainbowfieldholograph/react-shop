import './globalStyles.css'
import React, { useState } from 'react'
import Router from './router/Router'
import AppContext from './context/appContext'

const data = {
  collections: [
    {
      id: '999',
      title: 'snale',
      image:
        'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      productIds: ['real-capybara'],
      getProducts: function () {
        return data.products.filter((prod) => this.productIds.includes(prod.id))
      },
      getProductById: function (id) {
        return this.getProducts().find((prod) => prod.id === id)
      },
    },
  ],
  findCollectionById: function (id) {
    return data.collections.find((col) => col.id === id)
  },
  products: [
    {
      id: 'real-capybara',
      title: 'real capybara hours t-shirt',
      price: '$35.0',
      image:
        'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      sizes: ['S', 'M', 'L', 'XL'],
      descr: 'Design by Fooyepont & Ambient Bird',
      benefits: [
        '100% organic ring-spun cotton',
        'Fabric weight: 5.3 oz/yd² (180 g/m²)',
        'Single jersey',
      ],
    },
  ],
  findProductById: function (id) {
    return data.products.find((prod) => prod.id === id)
  },

  findProductsByIds: function (ids) {
    let result = []
    for (let index = 0; index < ids.length; index++) {
      const element = data.products.find((prod) => ids[index] === prod.id)
      if (element) {
        result = [element, ...result]
      }
    }
    return result
  },
}

function App() {
  const [cartCount, setCartCount] = useState(JSON.parse(sessionStorage.getItem('cart'))?.length)

  const addNewCartItem = (id) => {
    const prevData = JSON.parse(sessionStorage.getItem('cart'))
    cartCount
      ? sessionStorage.setItem('cart', JSON.stringify([prevData && id, ...prevData]))
      : sessionStorage.setItem('cart', JSON.stringify([id]))
    const newData = JSON.parse(sessionStorage.getItem('cart'))
    setCartCount(newData?.length)
    console.log(newData)
  }

  return (
    <AppContext.Provider value={data}>
      <Router cartCount={cartCount} addNewCartItem={addNewCartItem} />
    </AppContext.Provider>
  )
}

export default App
