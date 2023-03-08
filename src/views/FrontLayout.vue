<template>
  <div>
    <nav ref="navbar" class="navbar navbar-expand-md fixed-top py-3">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">Cafe Beat</RouterLink>
        <a class="d-md-none" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img class="img-fluid" width="40" src="../../public/image/icon/icon-menu.png" alt=""></a>        
        <!-- PC 板選單 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-lg-auto mb-lg-0">
            <li class="nav-item ms-4">
              <RouterLink class="nav-link" to="/">首頁</RouterLink>
            </li>
            <li class="nav-item ms-4">
              <RouterLink class="nav-link" to="/about">產品列表</RouterLink>
            </li>
            <li class="nav-item ms-4">
              <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
            </li>
            <li class="nav-item ms-4">
              <RouterLink class="nav-link" to="/about">
                <img width="24" src="../../public/image/icon/icon-cart.png" alt="cart">
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
              <img width="40" src="../../public/image/icon/icon-close.png" alt="close">
            </button>
          </div>
          <div class="offcanvas-body py-0 pe-4">
            <ul class="navbar-nav mb-lg-0 text-end">
              <li class="nav-item ms-md-5 fs-5">
                <RouterLink class="nav-link d-inline-block" to="/">首頁</RouterLink>
              </li>
              <li class="nav-item ms-md-5 fs-5">
                <RouterLink class="nav-link d-inline-block" to="/about">產品列表</RouterLink>
              </li>
              <li class="nav-item ms-md-5 fs-5">
                <RouterLink class="nav-link d-inline-block" to="/about">關於我們</RouterLink>
              </li>
              <li class="nav-item ms-md-5 fs-5">
                <RouterLink class="nav-link d-inline-block" to="/about">
                  <img width="24" src="../../public/image/icon/icon-cart.png" alt="cart">
                </RouterLink>
              </li>
          </ul>
          </div>
        </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowTop: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      this.windowTop = window.scrollY /* or: e.target.documentElement.scrollTop */
      if(this.windowTop > 100) {
        this.$refs.navbar.classList.add('bg-dark', 'shadow', 'navbar-dark')
      } else {
        this.$refs.navbar.classList.remove('bg-dark', 'shadow', 'navbar-dark')
      }
    }
  }
}
</script>
<style lang="scss">
.nav-link.active {
  border-bottom: 2px solid #676767;
}
.navbar {
  transition: .3s;
}
.nav-item::before {
  content: '';
  transition: .3s;
  width: 0%;
  background-color: #676767;
  height: 2px;
  display:block; 
}
.nav-item:hover::before {
    width: 100%;
}
</style>