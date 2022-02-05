import { makeAutoObservable } from 'mobx'
import api from '../api/api'

class CartStore {
  cartItems = []
  maxCartItems = 35

  constructor() {
    makeAutoObservable(this)
    this.cartItems = sessionStorage.getItem('cart')
      ? JSON.parse(sessionStorage.getItem('cart'))
      : []
  }

  addNewCartItem = (parentId, sizeId) => {
    console.log('cart add', parentId, sizeId)
    const newItemId = Date.now() * (Math.random() + 1)
    const newCartElement = { id: newItemId, parentId: parentId, sizeId: sizeId }
    const prevData = JSON.parse(sessionStorage.getItem('cart'))
    if (prevData?.length >= this.maxCartItems) {
      alert('max cart items count!!!')
      return
    }
    sessionStorage.setItem(
      'cart',
      prevData ? JSON.stringify([newCartElement, ...prevData]) : JSON.stringify([newCartElement])
    )
    const newData = JSON.parse(sessionStorage.getItem('cart'))
    console.log(newData)
    this.cartItems = newData
  }

  findCartItems = async () => {
    let result = []
    for (let i = 0; i < this.cartItems.length; i++) {
      const prod = this.cartItems[i]
      const fetchProduct = await api.getOneProduct(prod.parentId)
      const newProduct = { ...fetchProduct.data }
      newProduct.id = prod.id
      newProduct.parentId = prod.parentId
      newProduct.sizeId = prod.sizeId
      result = [newProduct, ...result]
    }
    return result
  }

  removeCartItem = (id) => {
    const prevData = JSON.parse(sessionStorage.getItem('cart'))
    if (prevData) {
      const newData = prevData.filter((prod) => prod.id !== id)
      sessionStorage.setItem('cart', JSON.stringify(newData))
      this.cartItems = JSON.parse(sessionStorage.getItem('cart'))
    }
  }

  getCartItemsCount = () => this.cartItems.length
}

export default new CartStore()
