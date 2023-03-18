<template>
  <div>
    <loading
      :active="isLoading"
      :loader="'dots'"
      :color="'#FCF8F3'"
      :background-color="'#676767'"
    />
    <div class="position-relative">
      <img
        class="top-50 imgset"
        src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
      />
      <p
        class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
      >
        <i class="bi bi-cup-hot"></i> 產品
      </p>
    </div>
    <div class="container mt-3">
      <div class="row sticky-top">
        <div class="col-md-6 col-lg-4 mb-3 mb-md-0">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="() => (selectedCategory = '')"
              :class="{ 'btn-primary text-white': selectedCategory === '' }"
            >
              全部產品
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              v-for="item in categories"
              :key="item"
              @click="() => (selectedCategory = item)"
              :class="{ 'btn-primary text-white': selectedCategory === item }"
            >
              {{ item }}
            </button>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 ms-auto">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control border-bottom border-0 rounded-0"
              placeholder="搜尋產品"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-outline-dark border-0" type="button" id="button-addon2">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6 mb-3">
          <router-link :to="`products/${product.id}`">
            <div class="card product-card">
              <div class="card-head">
                <img
                  class="card-img-top bg-cover"
                  height="300"
                  :src="product.imageUrl"
                  alt="產品"
                  :title="product.title"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  NT$ {{ product.price }} /
                  <small class="text-muted text-decoration-line-through"
                    >NT$ {{ product.origin_price }}</small
                  >
                </p>
                <div class="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-primary me-auto"
                    :disabled="state === product.id"
                    @click.prevent="() => addToCart(product.id)"
                  >
                    <span
                      v-if="state === product.id"
                      class="spinner-grow text-secondary spinner-grow-sm"
                    ></span>
                    加入購物車
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="bi bi-heart"></i>
                    加入收藏
                  </button>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <Pagination :pagination="pagination" @emit-page="getProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Pagination from '../../components/PaginationComponent.vue'
import { cartStore } from '../../stores/cart'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      categories: [],
      selectedCategory: ''
    }
  },
  watch: {
    selectedCategory() {
      this.getProducts()
    }
  },
  components: {
    Pagination,
    Loading
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCarts']),
    getProducts(page = 1) {
      this.isLoading = true
      this.$http(
        `${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}&category=${this.selectedCategory}`
      )
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    getCategory() {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          const allProducts = res.data.products
          const result = []
          allProducts.forEach((item) => {
            result.push(item.category)
          })
          this.categories = result.filter((item, i, arr) => {
            return arr.indexOf(item) === i
          })
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['state'])
  },
  mounted() {
    this.getProducts()
    this.getCategory()
  }
}
</script>

<style lang="scss">
.card-head {
  overflow: hidden;
}
.product-card {
  overflow: hidden;
  img {
    transition: 0.3s;
  }
  &:hover img {
    transform: scale(1.2);
  }
  &:hover {
    box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
