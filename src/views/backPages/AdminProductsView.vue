<template>
  <div>
    <loading :active="isLoading" :loader="'dots'" :color="'#FCF8F3'" :background-color="'#676767'" />
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-target="#productModal" @click="openProductModal(true)">
        建立新的產品
      </button>
    </div>
    <h2>產品列表</h2>
    <table class="table table-hover mt-4 align-middle">
      <thead>
        <tr>
          <th width="150">產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="150">是否啟用</th>
          <th width="120">編輯產品</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td width="150">{{ product.title }}</td>
          <td width="120">{{ product.origin_price }}</td>
          <td width="120">{{ product.price }}</td>
          <td width="150">
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td width="120">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="openProductModal(false, product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openRemoveModal(product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      目前有 <span>{{ products.length }}</span> 項產品
    </p>
    <div class="d-flex justify-content-center">
      <Pagination
        :pagination="pagination"
        @emit-page="getProducts"
      ></Pagination>
    </div>
  </div>

  <!-- Product Modal -->
    <ProductModal
      :isNew="isNew"
      :product="tempProduct"
      @update="updateProduct"
      ref="productModal"
    >
    </ProductModal>
  <!-- del Modal -->
  <DelModal :product="tempProduct" @remove-item="removeProduct" ref="delModal"></DelModal>
</template>

<script>
import Loading from 'vue-loading-overlay'
import DelModal from '../../components/DeleteModal.vue'
import ProductModal from '../../components/ProductModal.vue'
import Pagination from '../../components/PaginationComponent.vue'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isLoading: false,
      products: [],
      bsModal: '',
      isNew: true,
      tempProduct: {},
      pagination: {}
    }
  },
  components: {
    Loading,
    DelModal,
    ProductModal,
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
        .then(res => {
          console.log('後台產品： ',res.data);
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/login')
        })
    },
    openProductModal (isNew, product) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...product }
        this.isNew = false
      }
      this.bsModal = this.$refs.productModal
      this.bsModal.openModal()
    },
    updateProduct () {
      let api = `${VITE_URL}/api/${VITE_PATH}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        api = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      this.$http[method](api, { data: this.tempProduct })
        .then(() => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.message)
        })
      this.bsModal.hideModal()
    },
    openRemoveModal (item) {
      this.tempProduct = { ...item }
      this.bsModal = this.$refs.delModal
      this.bsModal.openModal()
    },
    removeProduct () {
      this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`)
        .then(() => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.message)
        })
      this.bsModal.hideModal()
    }
  },
  mounted () {
    console.log(VITE_URL, VITE_URL);
    console.log(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=`);
    this.getProducts()
  }
}
</script>
