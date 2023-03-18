import { defineStore } from 'pinia'
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env;
export const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      final_total: 0,
      total: 0,
      isLoading: false,
      state: ''
    }
  },
  actions: {
    getCarts() {
      this.isLoading = true
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
          this.isLoading = false
        })
        .catch(err => {
          console.log(err.response.data.message);
          this.isLoading = false
        })
    },
    addToCart(id, qty = 1) {
      this.state = id
      this.isLoading = true
      const data = {
        product_id: id,
        qty
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          this.getCarts()
          this.state = ''
          this.isLoading = false
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    updateCart(id, qty) {
      this.isLoading = true
      const data = {
        product_id: id,
        qty
      }
      console.log(id, qty);
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`, { data })
        .then(res => {
          console.log(res.data);
          this.getCarts()
          this.isLoading = false
        })
    },
    removeCart(id) {
      this.state = id
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
          this.state = ''
          this.getCarts()
        })
    },
    removeAllCart() {
      this.isLoading = true
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then(() => {
          this.getCarts()
          this.isLoading = false
        })
    }
  }
})
