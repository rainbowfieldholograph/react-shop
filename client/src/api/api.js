import axios from 'axios'

class Api {
  url = process.env.REACT_APP_API_URL
  async getAllProducts() {
    try {
      const response = await axios.get(`${this.url}api/products`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getAllCollections() {
    try {
      const response = await axios.get(`${this.url}api/collections`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getOneCollection(id) {
    try {
      const response = await axios.get(`${this.url}api/collections/${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getOneProduct(id) {
    try {
      const response = await axios.get(`${this.url}api/products/${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
