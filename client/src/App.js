import './globalStyles.css'
import { useEffect, useState } from 'react'
import Router from './router/Router'
import AppContext from './context/appContext'
import CartContext from './context/cartContext'
import axios from 'axios'

const appData = {
  collections: [
    {
      id: '999',
      title: 'snale',
      image:
        'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
      productIds: ['real-capybara', 'real-123', 'real12315135-capybara'],
      getProducts() {
        return appData.products.filter((prod) => this.productIds.includes(prod.id))
      },
      getProductById(id) {
        return this.getProducts().find((prod) => prod.id === id)
      },
    },
  ],

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
  findCollectionById(id) {
    return this.collections.find((col) => col.id === id)
  },
  findProductById(id) {
    return this.products.find((prod) => prod.id === id)
  },

  // findProductsByIds(ids) {
  //   let result = []
  //   for (let index = 0; index < ids.length; index++) {
  //     const element = data.products.find((prod) => ids[index] === prod.id)
  //     if (element) {
  //       result = [element, ...result]
  //     }
  //   }
  //   return result
  // },
}

function App() {
  const [loading, setLoading] = useState(false)

  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []
  )

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/product`)
      console.log(response)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCollections = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/collection`)
      setLoading(false)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

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
      const newProduct = { ...appData.findProductById(prod.parentId) }
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
    <AppContext.Provider value={{ appData, fetchCollections, loading }}>
      <CartContext.Provider
        value={{
          addNewCartItem,
          findCartItems,
          removeCartItem,
          getCartItemsCount,
        }}
      >
        <Router />
      </CartContext.Provider>
    </AppContext.Provider>
  )
}

export default App
