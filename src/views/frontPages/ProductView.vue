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
        alt="banner圖片，為一杯咖啡"
      />
      <p
        class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
      >
        產品介紹
      </p>
    </div>
    <div class="container">
      <div class="row py-3 py-lg-7">
        <div class="col-md-6">
          <img class="product-img bg-cover" :src="product.imageUrl" :title="product.title" />
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <h1 class="mt-3 mt-md-0 mb-3">
                {{ product.title }}
              </h1>
            </div>
            <div>
              <small class="badge rounded-pill text-bg-dark text-light fs-6">
                {{ product.category }}
              </small>
              <p v-html="product.content" class="mb-3 mt-3"></p>
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
              <div class="row align-items-end">
                <div class="col-md-6">
                  <button
                    type="button"
                    class="btn btn-primary w-100 mt-2 mb-2 mb-md-0"
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
                <div class="col-md-4">
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
          </div>
        </div>
      </div>
      <div>
        <div class="card card-body">
          <p>【付款方式】 ATM轉帳 只要將購買款項直接匯入系統指定帳號即可完成付款。</p>
          <p>
            【配送相關】 發送時間：完成訂單確認後1～5個工作天內出貨。
            恕不指定到貨日及時間，以物流配送為主。
          </p>
          <p>並請所有消費者注意以下事項</p>
          <ol>
            <li>
              不良品退還經過檢查與測試之後，若發現商品本身並無瑕疵，消費者必須支付所有發生之相關費用。
            </li>
            <li>
              在您收到貨品後如因非人為因素之商品損毀、刮傷、或運輸過程造成包裝破損不完整者<br />
              請您儘速通知本公司客服人員，我們會進行商品瑕疵或損壞鑑定，並儘速將新品寄給您。
            </li>
            <li>
              若商品因消費者個人不當使用拆卸產生人為因素造成故障、損毀、磨損、擦傷、刮傷、髒污、包裝破損不完<br />
              整者，或是發票、附配件不齊者，恕不接受退貨。
            </li>
            <li>以上為網路購物基本規則，下單視已閱讀並了解同意。 感謝您！</li>
          </ol>
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
      <Swiper
        class="my-3 pb-3"
        :space-between="20"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3 }
        }"
        :scrollbar="{ draggable: true }"
      >
        <SwiperSlide v-for="item in products" :key="item.id">
          <RouterLink :class="{ 'pe-none': state === item.id }" :to="`/products/${item.id}`">
            <div class="card product-card">
              <div class="card-head">
                <img
                  class="card-img-top bg-cover"
                  height="300"
                  :src="item.imageUrl"
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
                    @click.prevent="() => addToCart(item.id)"
                  >
                    <span
                      v-if="state === item.id"
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
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { mapActions, mapState } from 'pinia'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
import { cartStore } from '@/stores/cart'
import { register } from 'swiper/element/bundle'
import { collectStore } from '@/stores/collect'
import mixin from '@/mixin/thousands_separators'
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
    Loading,
    Swiper,
    SwiperSlide
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
          this.getProducts()
          this.isLoading = false
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message
          })
          this.isLoading = false
        })
    },
    getProducts() {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${this.category}`)
        .then((res) => {
          const filterProducts = res.data.products.filter((item) => item.id !== this.product.id)
          this.products = filterProducts
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message
          })
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
