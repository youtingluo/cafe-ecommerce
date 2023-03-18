<template>
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      填寫資料
    </p>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <VForm ref="form" class="my-3" v-slot="{ errors }" @submit="onSubmit">
          <div class="form-floating mb-2 mb-md-3">
            <VField name="姓名" type="text" class="form-control" id="name"
            placeholder="請輸入姓名" :class="{ 'is-invalid': errors['姓名'] }" rules="required"
            v-model="user.name"/>
            <ErrorMessage name="姓名" class="invalid-feedback" />
            <label for="name">
              姓名 <span class="text-danger">*</span>
            </label>
          </div>

          <div class="form-floating mb-2 mb-md-3">
            <VField name="信箱" type="email" class="form-control" id="email" 
            placeholder="請輸入信箱" :class="{ 'is-invalid': errors['信箱'] }" rules="required|email"
            v-model="user.email"/>
            <ErrorMessage name="信箱" class="invalid-feedback" />
            <label for="email">
              信箱 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <VField name="電話" type="tel" class="form-control" id="tel"
            placeholder="請輸入電話" :class="{ 'is-invalid': errors['電話'] }" rules="required|min:8"
            v-model="user.tel"/>
            <ErrorMessage name="電話" class="invalid-feedback" />
            <label for="tel">
              電話 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <VField name="地址" type="text" class="form-control" id="address"
            placeholder="請輸入地址" :class="{ 'is-invalid': errors['地址'] }" rules="required"
            v-model="user.address"/>
            <ErrorMessage name="地址" class="invalid-feedback" />
            <label for="address">
              地址 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <textarea class="form-control" placeholder="想對我們說的話" id="Textarea"
            v-model="message"></textarea>
            <label for="Textarea">留言</label>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <button type="button" class="btn btn-outline-primary w-100"
              @click="() => $router.go(-1)">修改購物車</button>
            </div>
            <div class="col-6">
              <button type="submit" class="btn btn-primary ms-auto w-100">前往付款</button>
            </div>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { cartStore } from '../../stores/cart';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onSubmit() {
      const data = {
        user: this.user,
        message: this.message
      }
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
        .then(res => {
          this.getCarts()
          this.$refs.form.resetForm()
          this.$router.replace(`/order/${res.data.orderId}`)
        })
    }
  },
}
</script>