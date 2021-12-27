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
    const { data } = await api.getAllProducts()
    this.setProducts(data)
  }

  async fetchCollections() {
    const { data } = await api.getAllCollections()
    this.setCollections(data)
  }
}

export default new DataStore()
