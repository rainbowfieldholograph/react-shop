import './globalStyles.css'
import React from 'react'
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
}

function App() {
  return (
    <AppContext.Provider value={data}>
      <Router />
    </AppContext.Provider>
  )
}

export default App
