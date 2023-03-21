<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-6 py-4 bg-secondary rounded-4">
        <h1 class="h3 mb-4 font-weight-normal text-center">請先登入</h1>
        <VForm class="form-signin" v-slot="{ errors }" @submit="login">
          <div class="form-floating mb-3">
            <VField
              type="email"
              name="帳號"
              class="form-control"
              :class="{ 'is-invalid': errors['帳號'] }"
              rules="required|email"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <ErrorMessage name="帳號" class="invalid-feedback" />
            <label for="floatingInput">帳號</label>
          </div>
          <div class="form-floating">
            <VField
              type="password"
              name="密碼"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <ErrorMessage name="密碼" class="invalid-feedback" />
            <label for="floatingPassword">密碼</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" :disabled="status">
            <span v-if="status" class="spinner-grow spinner-grow-sm me-2" role="status">
            </span>
            <span v-else>登入</span>
          </button>
        </VForm>
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
      },
      status: false
    }
  },
  methods: {
    login() {
      this.status = true
      this.$http
        .post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          this.status = false
          const { token, expired } = res.data
          document.cookie = `hexschoolToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          this.status = false
          alert(err.response.data.message)
        })
    }
  }
}
</script>
