import { makeAutoObservable } from 'mobx'
import api from '../api/api'

class DataStore {
  products = []
  collections = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setProducts(newProducts) {
    this.products = newProducts
  }

  setCollections(newCollections) {
    this.collections = newCollections
  }

  async fetchProducts() {
    try {
      const { data } = await api.getAllProducts()
      this.setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  async fetchCollections() {
    try {
      const { data } = await api.getAllCollections()
      this.setCollections(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new DataStore()
