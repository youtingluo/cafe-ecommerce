<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin">產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/coupons">優惠券列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/orders">訂單列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">回前台</RouterLink>
            </li>
          </ul>
          <button type="button" class="btn btn-light ms-auto" @click="() => logOut()">登出</button>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <RouterView v-if="status" />
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_URL } = import.meta.env
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    checkLogin() {
      const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('hexschoolToken'))
        ?.split('=')[1]
      this.$http.defaults.headers.common.Authorization = cookieValue
      this.$http
        .post(`${VITE_URL}/v2/api/user/check`)
        .then((res) => {
          if (res.data.success) {
            this.status = true
            this.$router.push('/admin')
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
          this.$router.push('/login')
        })
    },
    logOut() {
      this.$http.post(`${VITE_URL}/v2/logout`)
        .then(() => {
          this.$http.defaults.headers.common.Authorization = ''
          this.$router.push('/')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: '請重試一次',
            text: err.response.data.message,
          })
          this.$router.push('/login')
        })
    }
  },
  created() {
    this.checkLogin()
  }
}
</script>
