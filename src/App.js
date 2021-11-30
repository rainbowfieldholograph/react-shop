import './globalStyles.css'
import { useState } from 'react'
import Router from './router/Router'
import AppContext from './context/appContext'
import CartContext from './context/cartContext'

const data = {
  collections: [
    {
      id: '999',
      title: 'snale',
      image:
        'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      productIds: ['real-capybara', 'real-123', 'real12315135-capybara'],
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
    {
      id: 'real-123',
      title: 'realsss capybara hours t-shirt',
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
    {
      id: 'real12315135-capybara',
      title: 'realvbvvvvvvv capybara hours t-shirt',
      price: '$3500.0',
      image:
        'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      sizes: ['S', 'M', 'L', 'XL'],
      descr: 'Design by pud & Ambient Bird',
      benefits: [
        '000% organic ring-spun cotton',
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
  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []
  )

  const addNewCartItem = (parentId, sizeId) => {
    const newItemId = Date.now() * (Math.random() + 1)
    const newCartElement = { id: newItemId, parentId: parentId, sizeId: sizeId }
    const prevData = JSON.parse(sessionStorage.getItem('cart'))
    if (prevData?.length >= 35) {
      alert('max cart items count!!!')
      return
    }
    sessionStorage.setItem(
      'cart',
      prevData ? JSON.stringify([newCartElement, ...prevData]) : JSON.stringify([newCartElement])
    )
    const newData = JSON.parse(sessionStorage.getItem('cart'))
    setCartItems(newData)
  }

  const findCartItems = () => {
    let newData = []
    cartItems?.forEach((prod) => {
      const newProduct = { ...data.findProductById(prod.parentId) }
      newProduct.id = prod.id
      newProduct.parentId = prod.parentId
      newProduct.sizeId = prod.sizeId
      newData = [newProduct, ...newData]
    })
    return newData
  }

  const removeCartItem = (id) => {
    const prevData = JSON.parse(sessionStorage.getItem('cart'))
    if (prevData) {
      const newData = prevData.filter((prod) => prod.id !== id)
      sessionStorage.setItem('cart', JSON.stringify(newData))
      setCartItems(JSON.parse(sessionStorage.getItem('cart')))
    }
  }

  const getCartItemsCount = () => cartItems.length

  return (
    <AppContext.Provider value={data}>
      <CartContext.Provider
        value={{ addNewCartItem, findCartItems, removeCartItem, getCartItemsCount }}
      >
        <Router addNewCartItem={addNewCartItem} findCartItems={findCartItems} />
      </CartContext.Provider>
    </AppContext.Provider>
  )
}

export default App
