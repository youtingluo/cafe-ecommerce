<template>
  <div>
    <loading :active="isLoading" :loader="'dots'" :color="'#FCF8F3'" :background-color="'#676767'" />
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="() => openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <h2>優惠券列表</h2>
    <table class="table table-hover mt-4 align-middle">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th>折價百分比</th>
          <th>code</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯優惠券</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.code }}</td>
          <td>
            {{ dueDate(item.due_date) }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="() => openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="() => openRemoveModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      目前有 <span>{{ coupons.length }}</span> 項優惠券
    </p>
    <div class="d-flex justify-content-center">
      <Pagination
        :pagination="pagination"
        @emit-page="getCoupon"
      />
    </div>
  </div>
  <DeleteModal ref="delModal" :product="tempCoupon" @remove-item="removeCoupon"/>
  <CouponModal ref="couponModal" :isNew="isNew"
      :coupon="tempCoupon" @update="updateCoupon"/>
</template>

<script>
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import CouponModal from '@/components/CouponModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Pagination from '@/components/PaginationComponent.vue'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isNew: true,
      isLoading: false,
      coupons: [],
      tempCoupon: {},
      pagination: {},
      bsModal: ''
    }
  },
  components: {
    CouponModal,
    DeleteModal,
    Pagination,
    Loading
  },
  methods: {
    getCoupon (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then(res => {
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/login')
        })
    },
    openCouponModal (isNew, coupon) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0
        }
        this.isNew = true
      } else {
        this.tempCoupon = { ...coupon }
        this.isNew = false
      }
      this.bsModal = this.$refs.couponModal
      this.bsModal.openModal()
    },
    updateCoupon () {
      let api = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`
      let method = 'post'
      if (!this.isNew) {
        api = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
        method = 'put'
      }
      if (this.tempCoupon.percent < 0 || this.tempCoupon.percent > 100) {
        Swal.fire({
          icon: 'error',
          title: '請重試一次',
          text: '請勿為負值或大於一百',
        })
        return
      }
      this.$http[method](api, { data: this.tempCoupon })
        .then(() => {
          this.getCoupon()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
      this.bsModal.hideModal()
    },
    openRemoveModal (item) {
      this.tempCoupon = { ...item }
      this.bsModal = this.$refs.delModal
      this.bsModal.openModal()
    },
    removeCoupon () {
      this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(() => {
          this.getCoupon()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
        })
      this.bsModal.hideModal()
    }
  },
  computed: {
    dueDate () {
      return (time) => new Date(time * 1000).toLocaleDateString()
    }
  },
  mounted () {
    this.getCoupon()
  }
}
</script>
