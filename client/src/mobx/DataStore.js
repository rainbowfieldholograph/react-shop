import { makeAutoObservable } from 'mobx'
import api from '../api/api'

class DataStore {
  products = []
  collections = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchProducts() {
    const response = await api.getAllProducts()
    this.products = response.data
    console.log(response)
  }

  async fetchCollections() {
    const response = await api.getAllCollections()
    this.collections = response.data
    console.log(response)
  }

  findCollectionProducts(colId) {
    return this.products.filter((prod) => prod.collectionId === Number(colId))
  }

  setLoading(value) {
    this.loading = value
  }
}

export default new DataStore()
