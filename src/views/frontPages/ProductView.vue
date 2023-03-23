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
        class="top-50 imgset bg-mask"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
      />
      <p
        class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
      >
        產品介紹
      </p>
    </div>
    <div class="container">
      <div class="row py-3">
        <div class="col-md-6">
          <img
            class="product-img bg-cover"
            :src="product.imageUrl"
            alt="商品圖片"
            :title="product.title"
          />
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-between h-100">
            <div class="text-center">
              <h1 class="mt-3 mt-md-0 mb-3">
                {{ product.title }}
              </h1>
            </div>
            <div>
              <span class="badge rounded-pill text-bg-info text-light">
                {{ product.category }}
              </span>
              <p v-html="product.content" class="mb-3 mt-2"></p>
            </div>
            <div>
              <select
                class="form-select selectQty d-md-inline-block"
                aria-label=".form-select-sm example"
                v-model="qty"
              >
                <option selected :value="i" v-for="i in 10" :key="i">
                  {{ i }} {{ product.unit }}
                </option>
              </select>
              <p class="ms-0 ms-md-3 mt-2 mt-md-0 d-md-inline-block">
                <span class="fw-bold">NT$ {{ thousands(product.price) }}</span> / {{ product.unit }}
              </p>
              <div class="row">
                <div class="col-md-6">
                  <button
                    type="button"
                    class="btn btn-primary w-100 mt-2"
                    :disabled="state === product.id"
                    @click="() => addToCart(product.id, qty)"
                  >
                    <span
                      v-if="state === product.id"
                      class="spinner-grow text-secondary spinner-grow-sm"
                    ></span>
                    加入購物車
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    v-if="!isFav(product.id)"
                    type="button"
                    class="btn btn-outline-danger w-100 mt-2"
                    @click="() => addToCollect(product)"
                  >
                    <i class="bi bi-heart align-middle"></i> 加入收藏
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-danger w-100 mt-2"
                    @click.prevent="() => removeCollect(product)"
                  >
                    <i class="bi bi-heart align-middle"></i>
                    已收藏
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link rounded-0 border border-primarythree active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#standard-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            商品規格
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link rounded-0 border border-primarythree"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#return-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            退換貨須知
          </button>
        </li>
      </ul>
      <div class="tab-content py-3" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="standard-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <ul>
            <li v-for="(str, key) in desStr" :key="key">{{ str }}</li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="return-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="row">
            <div class="col-md-6">
              <p class="fw-bold mb-2">退換貨須知：</p>
              <ol>
                <li class="mb-2">
                  請注意：除商品本身瑕疵外，為顧及個人衛生問題，拆封後恕無法退換貨，敬請見諒。
                  務必保持商品及相關配件完整性，並請於收到商品日起 7天內（含假日）與我們聯繫，
                  辦理換貨事宜（外包塑膠膜已撕開或商品塑膠袋已打開，即算開封狀態）
                </li>
                <li>
                  依《消保法》規定，消費者有 7 日商品鑑賞期之權益。猶豫期非試用期，
                  商品需全新未開封，若商品已開封，恕無法辦理退貨退款手續。收到商品超過 7
                  天，恕不接受退貨。
                </li>
              </ol>
            </div>
            <div class="col-md-6">
              <p class="fw-bold mb-2">運送服務：</p>
              <ol>
                <li class="mb-2">我們所提供的產品配送區域範圍目前僅限台灣本島。</li>
                <li>商品之實際配貨日期、退換貨日期，依我們向您另行通知之內容為準。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <h3 class="h2 text-center">相關產品</h3>
      <!-- swiper -->
      <swiper-container
        class="row pb-3 my-3"
        :breakpoints="{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
        :scrollbar="{ draggable: true }"
      >
        <swiper-slide class="col-4" v-for="item in products" :key="item.id">
          <router-link :to="`/products/${item.id}`">
            <div class="card product-card">
              <div class="card-head">
                <img
                  class="card-img-top bg-cover"
                  height="300"
                  :src="item.imageUrl"
                  alt="產品"
                  :title="item.title"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                  NT$ {{ thousands(item.price) }} /
                  <small class="text-muted text-decoration-line-through"
                    >NT$ {{ thousands(item.origin_price) }}</small
                  >
                </p>
                <div class="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-primary me-auto"
                    :disabled="state === item.id"
                    @click.prevent.stop="() => addToCart(item.id)"
                  >
                    <span
                      v-if="state === item.id"
                      class="spinner-grow text-secondary spinner-grow-sm"
                    ></span>
                    加入購物車
                  </button>
                  <button
                    v-if="!isFav(item.id)"
                    type="button"
                    class="btn btn-outline-danger"
                    @click.prevent.stop="() => addToCollect(item)"
                  >
                    <i class="bi bi-heart"></i>
                    加入收藏
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-danger"
                    @click.prevent.stop="() => removeCollect(product)"
                  >
                    <i class="bi bi-heart align-middle"></i>
                    已收藏
                  </button>
                </div>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { cartStore } from '../../stores/cart'
import { register } from 'swiper/element/bundle'
import { collectStore } from '../../stores/collect'
import mixin from '../../mixin/thousands_separators'
// register Swiper custom elements
register()
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      product: {},
      products: [],
      desStr: [],
      qty: 1,
      category: ''
    }
  },
  mixins: [mixin],
  components: {
    Loading
  },
  watch: {
    $route() {
      if (!this.$route.params.id) {
        return
      }
      this.getProduct()
    },
    product: {
      handler(val) {
        const desArr = val.description.split(',')
        this.desStr = desArr
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart', 'getCart']),
    ...mapActions(collectStore, ['addToCollect', 'getCollects', 'removeCollect']),
    getProduct() {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.category = res.data.product.category
          this.product = res.data.product
          this.isLoading = false
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.isLoading = false
          this.$router.push('/products')
        })
    },
    getProducts() {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${this.category}`)
        .then((res) => {
          this.products = res.data.products
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
    ...mapState(cartStore, ['state']),
    ...mapState(collectStore, ['collects'])
  },
  mounted() {
    this.getCollects()
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';
.selectQty {
  width: auto;
  z-index: 3;
  @include pad {
    width: 100%;
  }
}
.product-img {
  width: 100%;
  max-height: 500px;
  min-height: 300px;
}
.nav-link.active {
  background: #676767;
  color: #fff;
}
</style>
