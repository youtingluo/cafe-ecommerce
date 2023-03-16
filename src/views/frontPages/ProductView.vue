<template>
  <div>
    <loading :active="isLoading" :loader="'dots'" :color="'#FCF8F3'" :background-color="'#676767'" />
    <div class="position-relative">
      <img class="top-50 imgset bg-mask" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
      <p class="position-absolute top-50 start-50 p-2
      bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
        產品介紹
      </p>
    </div>
    <div class="container">
      <div class="row py-3">
        <div class="col-md-6">
          <img class="product-img bg-cover" :src="product.imageUrl" alt="商品圖片" :title="product.title">
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
              <p v-html="product.content" class="mb-3 mt-2">
              </p>
            </div>
            <div>
              <select class="form-select selectQty d-md-inline-block" aria-label=".form-select-sm example" v-model="qty">
                <option selected :value="i" v-for="i in 10" :key="i">
                  {{ i }} {{ product.unit }}
                </option>
              </select>
              <p class="ms-0 ms-md-3 mt-2 mt-md-0 d-md-inline-block">
                <span class="fw-bold">NT$ {{ product.price }}</span> / {{ product.unit }}
              </p>
              <div class="row">
                <div class="col-md-6">
                  <button type="button" class="btn btn-primary w-100 mt-2" @click="$event => addToCart(product.id)">
                    加入購物車
                  </button>
                </div>
                <div class="col-md-6">
                  <button type="button" class="btn btn-outline-danger w-100 mt-2">
                    <i class="bi bi-heart"></i> 加入收藏
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-0 border border-primarythree active" id="home-tab" data-bs-toggle="tab" data-bs-target="#standard-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">商品規格</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-0 border border-primarythree" id="profile-tab" data-bs-toggle="tab" data-bs-target="#return-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">退換貨須知</button>
        </li>
      </ul>
      <div class="tab-content py-3" id="myTabContent">
        <div class="tab-pane fade show active" id="standard-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <ul>
            <li v-for="(str, key) in desStr" :key="key">{{ str }}</li>
          </ul>
        </div>
        <div class="tab-pane fade" id="return-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row">
            <div class="col-md-6">
              <p class="fw-bold mb-2">
                退換貨須知：
              </p>
              <ol>
                <li class="mb-2">
                  請注意：除商品本身瑕疵外，為顧及個人衛生問題，拆封後恕無法退換貨，敬請見諒。
                務必保持商品及相關配件完整性，並請於收到商品日起 7天內（含假日）與我們聯繫，
                辦理換貨事宜（外包塑膠膜已撕開或商品塑膠袋已打開，即算開封狀態）
                </li>
                <li>依《消保法》規定，消費者有 7
                日商品鑑賞期之權益。猶豫期非試用期，
                商品需全新未開封，若商品已開封，恕無法辦理退貨退款手續。收到商品超過
                7 天，恕不接受退貨。</li>
              </ol>
            </div>
            <div class="col-md-6">
              <p class="fw-bold mb-2">
                運送服務：
              </p>
              <ol>
                <li class="mb-2">
                  我們所提供的產品配送區域範圍目前僅限台灣本島。
                </li>
                <li>商品之實際配貨日期、退換貨日期，依我們向您另行通知之內容為準。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <h3 class="h2 text-center">相關產品</h3>
      <div class="row my-3">
        <div class="col-md-6 mb-2">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="產品">
            <div class="card-body">
              <h5 class="card-title">冰咖啡</h5>
              <p class="card-text">濃醇香</p>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-2">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="產品">
            <div class="card-body">
              <h5 class="card-title">冰咖啡</h5>
              <p class="card-text">濃醇香</p>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      product: {},
      desStr: [],
      qty: 1
    }
  },
  components: {
    Loading
  },
  watch: {
    product: {
      handler(val) {
        const desArr = val.description.split(',');
        this.desStr = desArr;
      },
      deep: true,
    },
  },
  methods: {
    getProduct() {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          this.isLoading = false
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: this.qty
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then(() => {
          console.log('加入購物車成功');
          this.isLoading = false
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    }
  },
  mounted() {
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
  max-height: 400px;
}
.nav-link.active {
  background: #676767;
  color: #fff;
}
</style>