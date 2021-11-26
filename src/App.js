import './globalStyles.css'
import React from 'react'
import Router from './components/router/Router'

const collections = [
  {
    title: 'snale',
    products: [
      {
        title: 'real capybara hours t-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
    ],
  },
  {
    title: 'another',
    products: [
      {
        title: 'VDSVSDVSDVSDV',
        price: '$228.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
      {
        title: 't-shirt',
        price: '$35.0',
        image:
          'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      },
    ],
  },
]

function App() {
  return <Router data={collections} />
}

export default App
