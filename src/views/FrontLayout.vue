<template>
  <div>
    <nav ref="navbar" class="navbar navbar-expand-lg fixed-top w-100 py-3">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">Cafe Beat</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0">
            <li class="nav-item ms-5">
              <RouterLink class="nav-link" to="/">首頁</RouterLink>
            </li>
            <li class="nav-item ms-5">
              <RouterLink class="nav-link" to="/about">產品列表</RouterLink>
            </li>
            <li class="nav-item ms-5">
              <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
    border-width: 100%;
  }
  .navbar {
    transition: .3s;
  }
</style>