<template>
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      我的收藏
    </p>
  </div>

  <div v-if="!collects.length" class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center">
    <div class="mb-5 text-center">
      <h3>您還沒有收藏，去逛逛吧</h3>
      <i class="bi bi-heart" style="font-size: 3rem"></i>
    </div>
    <div>
      <router-link class="btn btn-primary d-inline-block" to="/products">馬上去選購</router-link>
    </div>
  </div>
  <div v-else class="container my-3 min-body-heigh">
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="collect in collects" :key="collect.id">
        <div @click.prevent="() => $router.push(`/products/${collect.id}`)">
          <div class="card product-card">
            <div class="card-head">
              <img class="card-img-top bg-cover" :src="collect.imageUrl" height="300" alt="產品">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ collect.title }}</h5>
              <p class="card-text">NT$ {{ collect.price }} / {{ collect.unit }}</p>
              <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-outline-primary w-100"
                @click.stop="() => removeCollect(collect)">
                  <i class="bi bi-heart"></i>
                  取消收藏</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { collectStore } from '../../stores/collect';

export default {
  methods: {
    ...mapActions(collectStore, ['getCollects', 'removeCollect'])
  },
  computed: {
    ...mapState(collectStore, ['collects'])
  },
  mounted() {
    this.getCollects()
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
