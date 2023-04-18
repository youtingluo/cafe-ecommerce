<template>
  <loading
    :active="isLoading"
    :loader="'dots'"
    :color="'#FCF8F3'"
    :background-color="'#676767'"
  />
  <div class="position-relative">
    <img
      class="imgset"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      填寫資料
    </p>
  </div>
  <div class="container py-4 py-lg-7 min-body-heigh">
    <ProcessBar />
    <div class="row">
      <div class="col-md-8 mx-auto">
        <VForm ref="form" class="my-3" v-slot="{ errors }" @submit="onSubmit">
          <div class="form-floating mb-2 mb-md-3">
            <VField
              name="姓名"
              type="text"
              class="form-control"
              id="name"
              placeholder="請輸入姓名"
              :class="{ 'is-invalid': errors['姓名'] }"
              rules="required"
              v-model="user.name"
              autofocus
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
            <label for="name"> 姓名 <span class="text-danger">*</span> </label>
          </div>

          <div class="form-floating mb-2 mb-md-3">
            <VField
              name="信箱"
              type="email"
              class="form-control"
              id="email"
              placeholder="請輸入信箱"
              :class="{ 'is-invalid': errors['信箱'] }"
              rules="required|email"
              v-model="user.email"
            />
            <ErrorMessage name="信箱" class="invalid-feedback" />
            <label for="email"> 信箱 <span class="text-danger">*</span> </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <VField
              name="電話"
              type="tel"
              class="form-control"
              id="tel"
              placeholder="請輸入電話"
              :class="{ 'is-invalid': errors['電話'] }"
              rules="required|min:8"
              v-model="user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback" />
            <label for="tel"> 電話 <span class="text-danger">*</span> </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <VField
              name="地址"
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入地址"
              :class="{ 'is-invalid': errors['地址'] }"
              rules="required"
              v-model="user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback" />
            <label for="address"> 地址 <span class="text-danger">*</span> </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <textarea
              class="form-control"
              style="height: 100px"
              placeholder="想對我們說的話"
              id="Textarea"
              v-model="message"
            ></textarea>
            <label for="Textarea">留言</label>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <button
                type="button"
                class="btn btn-outline-primary w-100"
                @click="() => $router.go(-1)"
              >
                修改購物車
              </button>
            </div>
            <div class="col-6">
              <button type="submit" class="btn btn-primary ms-auto w-100" :disabled="isLoading">前往付款</button>
            </div>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import ProcessBar from '@/components/ProcessBar.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { mapActions } from 'pinia'
import { cartStore } from '@/stores/cart'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  },
  components: {
    Loading,
    ProcessBar
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onSubmit() {
      this.isLoading = true
      const data = {
        user: this.user,
        message: this.message
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data }).then((res) => {
        this.isLoading = false
        this.getCarts()
        this.$refs.form.resetForm()
        this.$router.replace(`/order/${res.data.orderId}`)
      })
      .catch((err) => {
        alert(err.response.data.message)
        this.isLoading = false
      })
    }
  }
}
</script>
