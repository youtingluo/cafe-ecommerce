<template>
  <nav ref="navbar" class="navbar navbar-expand-md fixed-top py-3">
    <div class="container">
      <RouterLink class="navbar-brand waterfall fs-3 text-dark" to="/">Cafe Beat</RouterLink>
      <div>
      <RouterLink class="d-md-none" to="/cart">
        <button type="button" class="btn btn-dark badge rounded-pill me-3">
          <i class="bi bi-cart-fill text-white position-relative">
            <span class="position-absolute top-0 start-100 translate-middle-y bg-danger
            fw-normal rounded-circle px-2 py-1 font-normal">{{ carts.length }}</span>
          </i>
        </button>
      </RouterLink>
      <a class="d-md-none" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <img class="img-fluid" width="40" src="@/image/icon/icon-menu.png" alt="menu">
      </a>
    </div>
      <!-- PC 板選單 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item ms-4">
            <RouterLink class="nav-link" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item ms-4">
            <RouterLink class="nav-link" to="/products">產品列表</RouterLink>
          </li>
          <li class="nav-item ms-4">
            <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
          </li>
          <li class="nav-item ms-4">
            <RouterLink class="nav-link" to="/collect">我的收藏</RouterLink>
          </li>
          <li class="ms-4">
            <RouterLink class="nav-link" to="/cart">
              <button class="btn btn-dark badge rounded-pill fs-6">
                <i class="bi bi-cart-fill text-white position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle-y bg-danger
                  fw-normal rounded-circle px-2 py-1 font-normal">{{ carts.length }}</span>
                </i>
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 手機板選單 -->
  <div class="offcanvas offcanvas-end d-md-none w-75 bottom-50" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header justify-content-end">
      <button type="button" class="btn btn-sm" data-bs-dismiss="offcanvas" aria-label="Close">
        <img width="40" src="@/image/icon/icon-close.png" alt="close">
      </button>
    </div>
    <div class="offcanvas-body py-0 pe-4">
      <ul class="navbar-nav mb-lg-0 text-end">
        <li class="nav-item ms-md-5 fs-5" data-bs-dismiss="offcanvas">
          <RouterLink class="nav-link" to="/">首頁</RouterLink>
        </li>
        <li class="nav-item ms-md-5 fs-5" data-bs-dismiss="offcanvas">
          <RouterLink class="nav-link" to="/products">產品列表</RouterLink>
        </li>
        <li class="nav-item ms-md-5 fs-5" data-bs-dismiss="offcanvas">
          <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
        </li>
        <li class="nav-item ms-md-5 fs-5" data-bs-dismiss="offcanvas">
          <RouterLink class="nav-link" to="/collect">我的收藏</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '../stores/cart'

export default {
  mounted() {
    this.getCarts()
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onScroll() {
      this.windowTop = window.scrollY /* or: e.target.documentElement.scrollTop */
      if(this.windowTop > 100) {
        this.$refs.navbar.classList.add('bg-light', 'shadow', 'navbar-light')
      } else {
        this.$refs.navbar.classList.remove('bg-light', 'shadow', 'navbar-light')
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: .3s;
}
.nav-item::after {
  content: '';
  display: inline-block;
  transition: .3s;
  transform: scaleX(0);
  background-color: #676767;
  height: 2px;
  display:block; 
}
.nav-item:hover::after {
  transform: scaleX(1);
}
</style>