<template>
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      購物車
    </p>
  </div>
  <div class="container text-center mt-3">
    <div class="d-flex flex-column align-items-center">
      <h3>您的購物車還是空的</h3>
      <i class="bi bi-basket mb-3" style="font-size: 3rem"></i>
      <router-link class="btn btn-primary d-inline-block" to="/products">馬上去選購</router-link>
    </div>
  </div>
</template>