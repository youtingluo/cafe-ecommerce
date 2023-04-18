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
        src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
      />
      <p
        class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
      >
        <i class="bi bi-cup-hot"></i> 產品
      </p>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-6 col-lg-5 mb-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="() => $router.push(`/products`)"
              :class="{ 'btn-primary text-white': selectedCategory === '' }"
            >
              全部產品
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              v-for="item in categories"
              :key="item"
              @click="() => $router.push(`/products?query=${item}`)"
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
              v-model="searchContent"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <template v-if="searchContent">
          <h3 class="mb-3">
            以下為您顯示 {{ searchContent }} 的結果
            <button type="button" class="btn btn-outline-primary btn-sm mt-2" @click="() => getProducts()">
              <i class="bi bi-x-circle"></i> 取消搜尋
            </button>
          </h3>

          <div v-for="product in searchResult" :key="product.id" class="col-lg-4 col-md-6 mb-3">
            <RouterLink :class="{ 'pe-none': state === product.id }" :to="`products/${product.id}`">
              <div class="card product-card">
                <div class="card-head">
                  <img
                    class="card-img-top bg-cover"
                    height="300"
                    :src="product.imageUrl"
                    :title="product.title"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">
                    NT$ {{ thousands(product.price) }} /
                    <small class="text-muted text-decoration-line-through"
                      >NT$ {{ thousands(product.origin_price) }}</small
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
                    <button
                      v-if="!isFav(product.id)"
                      type="button"
                      class="btn btn-sm rounded btn-outline-primary"
                      @click.prevent="() => addToCollect(product)"
                    >
                      <i class="bi bi-heart"></i>
                      加入收藏
                    </button>
                    <button
                      v-else
                      type="button"
                      class="btn btn-outline-primary"
                      @click.prevent="() => removeCollect(product)"
                    >
                      <i class="bi bi-heart-fill text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
          <div v-if="searchResult.length === 0" class="col text-center min-body-heigh">
            <h2>查無商品</h2>
            <i class="bi bi-bag-x" style="font-size: 5rem"></i>
          </div>
        </template>

        <template v-else>
          <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6 mb-3">
            <RouterLink :class="{ 'pe-none': state === product.id }" :to="`products/${product.id}`">
              <div class="card product-card">
                <div class="card-head">
                  <img
                    class="card-img-top bg-cover"
                    height="300"
                    :src="product.imageUrl"
                    :title="product.title"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">
                    NT$ {{ thousands(product.price) }} /
                    <small class="text-muted text-decoration-line-through"
                      >NT$ {{ thousands(product.origin_price) }}</small
                    >
                  </p>
                  <div class="d-flex justify-content-between">
                    <button
                      type="button"
                      class="btn btn-primary me-auto"
                      @click.prevent="() => addToCart(product.id)"
                    >
                      <span
                        v-if="state === product.id"
                        class="spinner-grow text-secondary spinner-grow-sm"
                      ></span>
                      加入購物車
                    </button>
                    <button
                      v-if="!isFav(product.id)"
                      type="button"
                      class="btn btn-sm rounded btn-outline-primary"
                      @click.prevent="() => addToCollect(product)"
                    >
                      <i class="bi bi-heart"></i>
                      加入收藏
                    </button>
                    <button
                      v-else
                      type="button"
                      class="btn btn-outline-primary"
                      @click.prevent="() => removeCollect(product)"
                    >
                      <i class="bi bi-heart-fill text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </template>
      </div>
      <div v-if="!searchContent" class="d-flex justify-content-center">
        <Pagination :pagination="pagination" @emit-page="getProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Pagination from '@/components/PaginationComponent.vue'
import { cartStore } from '@/stores/cart'
import { collectStore } from '@/stores/collect'
import mixin from '@/mixin/thousands_separators'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      allProducts: [],
      pagination: {},
      categories: [],
      selectedCategory: '',
      searchContent: '',
      searchStatus: false
    }
  },
  mixins: [mixin],
  watch: {
    $route() {
      this.selectedCategory = this.$route.query.query || ''
      this.getProducts()
    },
    searchContent(o) {
      if (!o) {
        this.getProducts()
      }
    }
  },
  components: {
    Pagination,
    Loading
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCarts']),
    ...mapActions(collectStore, ['addToCollect', 'getCollects', 'removeCollect']),
    getProducts(page = 1) {
      this.searchStatus = false
      this.searchContent = ''
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
          alert(err.response.data.message)
          this.isLoading = false
        })
    },
    getCategory() {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          const allProducts = res.data.products
          this.allProducts = allProducts
          const result = []
          allProducts.forEach((item) => {
            result.push(item.category)
          })
          this.categories = result.filter((item, i, arr) => {
            return arr.indexOf(item) === i
          })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  computed: {
    isFav() {
      return (id) => {
        return this.collects.filter((item) => item.id === id).length
      }
    },
    searchResult() {
      return this.allProducts.filter((item) => {
        const regex = new RegExp(this.searchContent.split('').join('.*'), 'i')
        return regex.test(item.description) || regex.test(item.title)
      })
    },
    ...mapState(cartStore, ['state']),
    ...mapState(collectStore, ['collects'])
  },
  mounted() {
    this.getCollects()
    this.getCategory()
    this.selectedCategory = this.$route.query.query || ''
    this.getProducts()
  }
}
</script>
