<template>
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      購物車
    </p>
  </div>
  <div class="container text-center min-body-heigh d-flex flex-column align-items-center justify-content-center">
    <div class="mb-5">
      <h3>您的購物車還是空的</h3>
      <i class="bi bi-basket" style="font-size: 3rem"></i>
    </div>
    <div>
      <router-link class="btn btn-primary d-inline-block" to="/products">馬上去選購</router-link>
    </div>
  </div>

  <div class="d-none container my-3 my-md-5 min-body-heigh">
    <div class="row">
      <div class="col-md-8">
        <h1 class="bg-secondary p-3 text-center">購物車清單</h1>
        <!-- 購物車卡 -->
        <div class="d-flex justify-content-between mt-2 mt-md-3 border p-2 p-md-3">
          <div>
            <img class="d-none d-md-block me-md-3 cart-img bg-cover" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80">
          </div>
          <div class="d-flex flex-column align-items-start justify-content-between">
              <h3 class="h5 text-nowrap me-md-3">曼特寧黃金咖啡豆</h3>
              <span>NT$ 360</span>
            <select class="form-select form-select-sm mt-2">
              <option selected value="1">1</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="d-flex flex-column justify-content-between align-items-end ms-auto">
            <a href="#" class="px-2 fs-4 text-danger">
              <i class="bi bi-x-circle"></i>
            </a>
            <p class="mb-0 fw-bold">NT$ 720</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-2 mt-md-0">
        <div class="text-dark border border-dark p-3">
          <h2 class="text-center border-bottom border-2 pb-3 mb-3">訂單明細</h2>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p>小計：</p>
            <p>NT$ 1,200</p>
          </div>
          <div class="d-flex justify-content-between align-items-end mb-2">
            <p class="fs-3">總計：</p>
            <p class="fw-bold">NT$ 3,200</p>
          </div>
        </div>
        <button type="button" class="btn btn-dark btn-lg rounded-0 w-100">結帳</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .cart-img {
    height: 100px;
    width: 130px;
  }
</style>