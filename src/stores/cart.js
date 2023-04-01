import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env;
export const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      final_total: 0,
      total: 0,
      isLoading: false,
      state: '',
      message: ''
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
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
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
        .then(() => {
          this.getCarts()
          this.state = ''
          this.isLoading = false
          Swal.fire({
            position: 'top',
            title: '已加入購物車',
            icon: 'success',
            timer: 2500,
            toast: true,
            showConfirmButton: false,
            timerProgressBar: true
          })
        })
        .catch((err) => {
          this.state = ''
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
    },
    updateCart(cart, qty) {
      this.isLoading = true
      const data = {
        product_id: cart.product_id,
        qty
      }
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cart.id}`, { data })
        .then(() => {
          this.getCarts()
          this.isLoading = false
          Swal.fire({
            position: 'top',
            title: '已更新購物車',
            icon: 'success',
            timer: 1500,
            toast: true,
            showConfirmButton: false,
            showCloseButton: true,
          })
        })
        .catch((err) => {
          this.state = ''
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
    },
    removeCart(id) {
      this.state = id
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
          this.state = ''
          this.getCarts()
          Swal.fire({
            position: 'top',
            title: '已刪除產品',
            icon: 'success',
            timer: 1500,
            toast: true,
            showConfirmButton: false,
            showCloseButton: true,
          })
        })
        .catch((err) => {
          this.state = ''
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
    },
    removeAllCart() {
      this.isLoading = true
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then(() => {
          this.getCarts()
          this.message = ''
          this.isLoading = false
        })
        .catch((err) => {
          this.state = ''
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
    },
    useCoupon(code) {
      this.isLoading = true
      const data = {
        code
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, { data })
        .then((res) => {
          this.final_total = res.data.data.final_total
          this.message = res.data.message
          this.getCarts()
          this.isLoading = false
        })
    }
  }
})
