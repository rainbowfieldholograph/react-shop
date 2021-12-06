import axios from 'axios'

class Api {
  url = process.env.REACT_APP_API_URL

  async getAllProducts() {
    try {
      return await axios.get(`${this.url}api/product`)
    } catch (error) {
      console.log(error)
    }
  }

  async getAllCollections() {
    try {
      return await axios.get(`${this.url}api/collection`)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new Api()
