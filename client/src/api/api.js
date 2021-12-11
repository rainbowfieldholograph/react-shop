import axios from 'axios'

class Api {
  url = process.env.REACT_APP_API_URL

  async getAllProducts() {
    try {
      return await axios.get(`${this.url}api/products`)
    } catch (error) {
      console.log(error)
    }
  }

  async getAllCollections() {
    try {
      return await axios.get(`${this.url}api/collections`)
    } catch (error) {
      console.log(error)
    }
  }

  async getOneCollectionById(id) {
    try {
      return await axios.get(`${this.url}api/collections/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
