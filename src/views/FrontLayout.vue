<template>
  <FrontNavbar />
  <RouterView />
  <FooterBar />
</template>

<script>
import FrontNavbar from '../components/FrontNavbar.vue'
import FooterBar from '../components/FooterComponent.vue'
export default {
  data() {
    return {
      windowTop: 0
    }
  },
  components: {
    FooterBar,
    FrontNavbar
  }
}
</script>
