<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-6 py-4 bg-secondary rounded-4">
        <h1 class="h3 mb-4 font-weight-normal text-center">請先登入</h1>
        <form class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="floatingInput">帳號</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">密碼</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$http
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexschoolToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
