<template>
  <div class="position-relative">
    <img
      class="imgset"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      我的收藏
    </p>
  </div>

  <div
    v-if="!collects.length"
    class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center"
  >
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
      <div class="col-lg-4 col-md-6 mb-3" v-for="collect in collects" :key="collect.id">
        <router-link :to="`/products/${collect.id}`">
          <div class="card product-card">
            <div class="card-head">
              <img class="card-img-top bg-cover" :src="collect.imageUrl" height="300" alt="產品" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ collect.title }}</h5>
              <p class="card-text">NT$ {{ thousands(collect.price) }} / {{ collect.unit }}</p>
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-outline-primary w-100"
                  @click.stop="() => removeCollect(collect)"
                >
                  <i class="bi bi-heart"></i>
                  取消收藏
                </button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { collectStore } from '../../stores/collect'
import mixin from '../../mixin/thousands_separators'
export default {
  mixins: [mixin],
  methods: {
    ...mapActions(collectStore, ['getCollects', 'removeCollect'])
  },
  computed: {
    ...mapState(collectStore, ['collects'])
  },
  mounted() {
    this.getCollects()
  }
}
</script>