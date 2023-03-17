<template>
  <loading :active="isLoading" :loader="'dots'" :color="'#FCF8F3'" :background-color="'#676767'" />
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      購物車
    </p>
  </div>
  <div v-if="!carts.length" class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center">
    <div class="mb-5 text-center">
      <h3>您的購物車是空的</h3>
      <i class="bi bi-basket" style="font-size: 3rem"></i>
    </div>
    <div>
      <router-link class="btn btn-primary d-inline-block" to="/products">馬上去選購</router-link>
    </div>
  </div>

  <div v-else class="container my-3 my-md-5 min-body-heigh">
    <div class="row">
      <div class="col-md-8">
        <h1 class="bg-secondary p-3 text-center">購物車清單</h1>
        <!-- 購物車卡 -->
        <div class="d-flex justify-content-between mt-2 mt-md-3 border p-2 p-md-3"
          v-for="cart in carts" :key="cart.id">
          <div>
            <img class="d-none d-md-block me-md-3 cart-img bg-cover" :src="cart.product.imageUrl">
          </div>
          <div class="d-flex flex-column align-items-start justify-content-between">
            <h3 class="h5 text-nowrap me-md-3">{{ cart.product.title }}</h3>
            <span>NT$ {{ cart.product.price }}</span>
            <select class="form-select form-select-sm mt-2 selectQty" :disabled="state === cart.id" v-model="cart.qty"
            @change="() => updateCart(cart.id, cart.qty)">
              <option selected :value="i" v-for="i in 10" :key="`${i}5235`">{{ i }}</option>
            </select>
          </div>
          <div class="d-flex flex-column justify-content-between align-items-end ms-auto">
            <button type="button" class="btn btn-outline-danger border-0" :disabled="state === cart.id"
            @click="() => removeCart(cart.id)">
              <span v-if="state === cart.id" class="spinner-border spinner-border-sm"></span>
              <i v-else class="bi bi-x-circle"></i>
            </button>
            <p class="mb-0 fw-bold">NT$ {{ cart.final_total }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-end my-3">
          <button type="button" class="btn btn-outline-danger" :disabled="isLoading"
          @click="() => removeAllCart()">
            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
            清除購物車
          </button>
        </div>
      </div>
      <div class="col-md-4 mt-md-0">
        <div class="text-dark border border-dark p-3">
          <h2 class="text-center border-bottom border-2 pb-3 mb-3">訂單明細</h2>
          <div class="d-flex justify-content-between align-items-start mb-2">
            <p class="fs-5">小計：</p>
            <div class="d-flex flex-column">
              <p class="text-end border-bottom pb-3" v-for="cart in carts" :key="cart.id">{{ cart.product.title }} x {{ cart.qty }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p class="fs-3">總計：</p>
            <p class="fw-bold text-danger">NT$ {{ final_total }}</p>
          </div>
        </div>
        <router-link :to="`cart/${carts[0].id}`" type="button" class="btn btn-dark btn-lg rounded-0 w-100"
          >結帳
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { cartStore } from '../../stores/cart'
export default {
  components: {
    Loading,
  },
  methods: {
    ...mapActions(cartStore, ['updateCart', 'getCarts', 'removeCart', 'removeAllCart']),
  },
  computed: {
    ...mapState(cartStore, ['carts', 'isLoading', 'final_total', 'state'])
  },
  mounted() {
    this.getCarts()
  },
}
</script>

<style lang="scss" scoped>
.cart-img {
  height: 100px;
  width: 130px;
}
.selectQty {
  min-width: 200px;
}
</style>