<template>
  <loading :active="isLoading" :loader="'dots'" :color="'#FCF8F3'" :background-color="'#676767'" />
  <div class="position-relative">
    <img
      class="imgset"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      購物車
    </p>
  </div>
  <div
    v-if="!carts.length"
    class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center"
  >
    <div class="mb-5 text-center">
      <h3>您的購物車是空的</h3>
      <i class="bi bi-basket" style="font-size: 3rem"></i>
    </div>
    <div>
      <RouterLink class="btn btn-primary d-inline-block" to="/products">馬上去選購</RouterLink>
    </div>
  </div>

  <div v-else class="container my-3 my-md-5 min-body-heigh">
    <ProcessBar />
    <div class="row">
      <div class="col-md-8">
        <h1 class="bg-secondary p-3 text-center">購物車清單</h1>
        <!-- 購物車卡 -->
        <div
          class="d-flex justify-content-between mt-2 mt-md-3 border p-2 p-md-3"
          v-for="cart in carts"
          :key="cart.id"
        >
          <div>
            <img class="d-none d-md-block me-md-3 cart-img bg-cover" :src="cart.product.imageUrl" />
          </div>
          <div class="d-flex flex-column align-items-start justify-content-between">
            <h3 class="h5 text-nowrap me-md-3">{{ cart.product.title }}</h3>
            <span>NT$ {{ cart.product.price }}</span>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-primary"
                :disabled="state === cart.id"
                @click="() => updateCart(cart, cart.qty - 1)"
              >
                -
              </button>
              <input type="text" class="text-center qty-input" :value="cart.qty" readonly />
              <button
                type="button"
                class="btn btn-primary"
                :disabled="state === cart.id"
                @click="() => updateCart(cart, cart.qty + 1)"
              >
                +
              </button>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-between align-items-end ms-auto">
            <button
              type="button"
              class="btn btn-outline-danger border-0"
              :disabled="state === cart.id"
              @click="() => removeCart(cart.id)"
            >
              <span v-if="state === cart.id" class="spinner-border spinner-border-sm"></span>
              <i v-else class="bi bi-x-circle"></i>
            </button>
            <div class="text-end">
              <small v-if="cart.coupon" class="fw-bold text-primary text-decoration-line-through">
                NT$ {{ thousands(Math.round(cart.total)) }}
              </small>
              <p class="mb-0 fw-bold">NT$ {{ thousands(Math.round(cart.final_total)) }}</p>
              <small v-if="cart.coupon" class="text-success">
                {{ message }}
              </small>
            </div>
          </div>
        </div>
        <div class="row justify-content-between my-3">
          <div class="col-md-6">
            <VForm class="input-group" v-slot="{ errors }" @submit="() => useCoupon(code)">
              <VField
                name="優惠券"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['優惠券'] }"
                placeholder="輸入優惠碼"
                v-model="code"
                rules="required"
              ></VField>
              <button type="submit" class="btn btn-success" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                套用優惠券
              </button>
              <ErrorMessage name="優惠券" class="invalid-feedback" />
            </VForm>
          </div>
          <div class="col-md-6">
            <div class="d-flex justify-content-end mt-3 mt-md-0">
              <button
                type="button"
                class="btn btn-outline-danger"
                :disabled="isLoading"
                @click="() => removeAllCart()"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                清除購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4 mt-md-0">
        <div class="text-dark border border-dark p-3">
          <h2 class="text-center border-bottom border-2 pb-3 mb-3">訂單明細</h2>
          <div class="d-flex justify-content-between align-items-start mb-2">
            <p class="fs-5">小計：</p>
            <div class="d-flex flex-column">
              <p class="text-end border-bottom pb-3" v-for="cart in carts" :key="cart.id">
                {{ cart.product.title }} x {{ cart.qty }}
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p class="fs-3">總計：</p>
            <div class="text-end">
              <small v-if="message" class="fw-bold text-primary mb-0 text-decoration-line-through">
                NT$ {{ thousands(Math.round(total)) }}
              </small>
              <p class="fw-bold text-danger">NT$ {{ thousands(Math.round(final_total)) }}</p>
            </div>
          </div>
        </div>
        <RouterLink :to="`cart/${carts[0].id}`" class="btn btn-dark btn-lg rounded-0 w-100"
          >結帳
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import ProcessBar from '../../components/ProcessBar.vue'
import 'vue-loading-overlay/dist/css/index.css'
import { cartStore } from '../../stores/cart'
import mixin from '../../mixin/thousands_separators'
export default {
  data() {
    return {
      code: ''
    }
  },
  mixins: [mixin],
  components: {
    Loading,
    ProcessBar
  },
  methods: {
    ...mapActions(cartStore, ['updateCart', 'getCarts', 'removeCart', 'removeAllCart', 'useCoupon'])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'isLoading', 'final_total', 'state', 'message', 'total'])
  },
  mounted() {
    this.getCarts()
  }
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
.qty-input {
  max-width: 120px;
}
</style>
