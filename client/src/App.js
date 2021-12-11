import './globalStyles.css'
import { useState } from 'react'
import Router from './router/Router'
import CartContext from './context/cartContext'

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
      const newProduct = {}
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
  )
}

export default App
