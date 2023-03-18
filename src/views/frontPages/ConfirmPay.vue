<template>
  <div class="position-relative">
    <img
      class="imgset"
      src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      確認付款
    </p>
  </div>
  <div class="container my-3 min-body-heigh">
    <div class="row">
      <div class="col-md-6 mb-3 mb-md-0">
        <div class="text-dark border border-dark p-3">
          <h2 class="text-center border-bottom border-2 pb-3 mb-3">個人資料</h2>
          <ul>
            <li class="mb-2">姓名：{{ user.name }}</li>
            <li class="mb-2">信箱：{{ user.email }}</li>
            <li class="mb-2">地址：{{ user.address }}</li>
            <li class="mb-2">電話：{{ user.tel }}</li>
            <li>留言：{{ user.message }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-dark border border-dark p-3">
          <h2 class="text-center border-bottom border-2 pb-3 mb-3">訂單明細</h2>
          <p>
            建立日期：<span class="text-info">{{ createTime }}</span>
          </p>
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="fs-5">品項：</span>
            <div class="d-flex flex-column">
              <p class="text-end border-bottom pb-3" v-for="item in products" :key="item.id">
                {{ item.product.title }} x {{ item.qty }} <br />
                <small class="text-muted">NT$ {{ item.final_total }}</small>
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p class="fs-3">總計：</p>
            <p class="fw-bold text-danger">NT$ {{ total }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p class="fs-3">付款狀態：</p>
            <p class="fw-bold">
              <span v-if="is_paid" class="text-success">已付款</span>
              <span v-else class="text-muted">未付款</span>
            </p>
          </div>
        </div>
        <button v-if="!is_paid" type="button" class="btn btn-primary w-100 rounded-0" @click="() => sendOrder()">
          確認付款
        </button>
        <button v-else type="button" class="btn btn-primary w-100 rounded-0" @click="() => $router.push('/products')">
          繼續購物
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      products: {},
      user: {},
      create_at: 0,
      is_paid: false,
      total: false
    }
  },
  computed: {
    createTime() {
      const formatDate = new Date(this.create_at * 1000).toLocaleString()
      return formatDate
    }
  },
  methods: {
    getOrder() {
      console.log(this.$route.params)
      const { id } = this.$route.params
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/order/${id}`).then((res) => {
        console.log(res.data)
        this.products = res.data.order.products
        this.user = res.data.order.user
        this.create_at = res.data.order.create_at
        this.is_paid = res.data.order.is_paid
        this.total = res.data.order.total
      })
    },
    sendOrder() {
      const { id } = this.$route.params
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${id}`).then((res) => {
        console.log(res);
        this.getOrder()
      })
    }
  },
  mounted() {
    this.getOrder()
  }
}
</script>
