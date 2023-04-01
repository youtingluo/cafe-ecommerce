<template>
  <div class="banner position-relative top-0 end-0 d-flex align-items-center justify-content-start">
    <div class="container">
      <img
        class="banner-text position-absolute d-none d-lg-block"
        src="@/assets/image/text.png"
        alt="讓咖啡與芬芳豐富你的每一天"
      />
      <img class="position-absolute d-block d-lg-none" src="@/assets/image/text-mobile.png" alt="讓咖啡與芬芳豐富你的每一天" />
      <div class="d-flex flex-column justify-content-end align-items-center">
        <h1 class="mb-9 text-dark waterfall">Cafe beat</h1>
        <button type="button" class="btn btn-outline-dark"
          @click="() => $router.push('/products')">探索商品
        </button>
      </div>
    </div>
  </div>

  <section class="d-flex flex-column align-items-center flex-wrap py-lg-7 py-4">
    <div class="h3 ubunto">explore</div>
    <div class="bar"></div>
  </section>

  <!-- explore -->
  <section class="pb-md-9 pt-md-7 py-4 py-md-0">
    <div class="container">
      <div class="row align-items-center g-0">
        <div class="col-md-6 mb-3 mb-md-0">
          <img class="img-fluid bg-cover" src="@/assets/image/explore1.png" alt="一杯咖啡擺放在白色桌上與陽光照射下" />
        </div>
        <div class="col-md-6 mb-3 mb-md-0">
          <p class="h5 text-center mb-3 kiwi">繁忙工作中 治癒疲憊身心的飲品</p>
          <p class="h5 text-center kiwi">日常生活中 體驗多變精彩的人生</p>
        </div>
      </div>
      <div class="row align-items-center g-0">
        <div class="col-md-6 order-md-2 mb-3 mb-md-0">
          <img class="img-fluid bg-cover order-md-1" src="@/assets/image/explore2.png" alt="三杯由淺色致深色的咖啡" />
        </div>
        <div class="col-md-6 order-md-1">
          <div class="text-center">
            <p class="h6 text-center mb-3 kiwi">尋找屬於你的味道</p>
            <RouterLink
              to="/products"
              class="btn btn-light fw-bold text-primary border explore-button rounded-1"
            >
              探索商品
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 知識 -->
  <section class="pb-lg-9 py-4">
    <div class="container">
      <h2 class="fs-7 text-center waterfall">Knowledge</h2>
      <h2 class="h5 text-center kiwi mb-6">知識</h2>
      <div class="row align-items-end mb-3 mb-lg-7">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div
            class="bg-white bg-opacity-90 writing-vertical px-2 py-4 kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">淺焙</span>最原始的風味
          </div>
          <img class="img-fluid" src="@/assets/image/knowledge1.png" alt="將咖啡倒入咖啡杯中的動作" />
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>
              淺焙咖啡最重要的特色在於咖啡的「原始酸味」
              優質的淺焙咖啡豆具有清爽的花香或果香，部分還能感受到咖啡果實的甜味！
            </p>
            <p>如果想來杯爽口、沒有厚重苦味的咖啡，淺焙咖啡豆絕對是不二之選！</p>
          </div>
        </div>
      </div>

      <div class="row align-items-end mb-3 mb-lg-7">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div
            class="bg-white bg-opacity-90 writing-vertical px-2 py-4 kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">中焙</span>醇厚與酸味的平衡
          </div>
          <img class="img-fluid" src="@/assets/image/knowledge2.png" alt="一碗擺放著中焙的咖啡豆" />
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>
              中焙咖啡豆讓你親身體驗到咖啡的「絕妙平衡」經過中度烘焙後，能保留部分原始咖啡豆風味，
              除了巧克力般的苦味，也能感受到淡雅的水果香氣。
            </p>
            <p>香氣適中的中焙，能讓您同時品嘗多元變化。</p>
          </div>
        </div>
      </div>

      <div class="row align-items-end mb-3">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div
            class="bg-white bg-opacity-90 writing-vertical px-2 py-4 kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">深焙</span>醇厚且濃烈的口感
          </div>
          <img class="img-fluid" src="@/assets/image/knowledge3.png" alt="一碗擺放著深焙的咖啡豆" />
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>
              深焙咖啡豆的特徵是「苦味濃郁」藉由深度烘焙，將原本沒有苦味的咖啡生豆，淬煉出絕佳的焦苦風味與濃郁口感。
            </p>
            <p>若您不喜歡酸味，又想體驗咖啡的濃醇苦味及苦後回甘，推薦您嘗試看看。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 堅持 -->
  <section class="promise py-lg-9 py-4">
    <div class="container">
      <h2 class="fs-7 text-center waterfall">Promise</h2>
      <h2 class="h5 text-center kiwi mb-6">堅持</h2>
      <div class="row justify-content-center">
        <div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
          <img class="filter img-fluid" src="@/assets/image/promise1.png" alt="樹上長著一串咖啡豆" />
          <div class="position-absolute">
            <div class="text-white fs-5">新鮮原豆</div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
          <img class="filter img-fluid" src="@/assets/image/promise2.png" alt="鐵盤中鋪著新鮮咖啡豆" />
          <div class="position-absolute">
            <div class="text-white fs-5">當日配送</div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
          <img class="filter img-fluid" src="@/assets/image/promise3.png" alt="整齊擺好包裝好的咖啡豆" />
          <div class="position-absolute">
            <div class="text-white fs-5">完整包裝</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 購物 -->
  <section class="py-md-9 py-4">
    <div class="container">
      <h2 class="fs-7 text-center waterfall">Shopping</h2>
      <h2 class="h5 text-center kiwi mb-6">購物</h2>
      <div class="row">
        
        <div class="col-md-4 position-relative mb-md-0 mb-3">
          <RouterLink to="/products?query=咖啡豆">
          <div
            class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">聞香而來</span><span class="align-text-bottom">—</span> 咖啡豆系列
          </div>
          <img class="img-fluid" src="@/assets/image/shopping1.png" alt="鐵製的咖啡匙裝個滿滿咖啡豆" />
        </RouterLink>
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3">
          <RouterLink to="/products?query=咖啡杯">
          <div
            class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">視覺饗宴</span><span class="align-text-bottom">—</span> 咖啡杯系列
          </div>
          <img class="img-fluid" src="@/assets/image/shopping2.png" alt="一杯冒著熱氣的熱拿鐵" />
        </RouterLink>
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3">
          <RouterLink to="/products?query=咖啡用具">
          <div
            class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3"
          >
            <span class="h3">大師養成</span><span class="align-text-bottom">—</span> 咖啡用具系列
          </div>
          <img class="img-fluid" src="@/assets/image/shopping3.png" alt="正在濾泡中的咖啡慢慢滴入咖啡壺中" />
        </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- 優惠 -->
  <section class="pb-md-9 py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="bg-primaryone py-7 coupon text-center">
            <div class="h5 mb-3">獲取電子報</div>
            <div class="h4 text-danger">註冊即刻獲得 9 折優惠券</div>
            <div class="px-2">
              <VForm ref="couponForm"
                class="input-group mx-auto mt-4 coupon-form" v-slot="{ errors }"
                @submit="() => getCoupon()">
                <VField
                type="email"
                name="信箱"
                class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                rules="required|email"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <button type="submit" class="btn btn-light border border-1 rounded-1 text-primary">
                送出
              </button>
              <ErrorMessage name="信箱" class="invalid-feedback text-start" />
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
      .then(() => {
        Swal.fire({
          toast: true,
          icon: 'success',
          title: `已複製優惠碼 ${text}`,
          showCloseButton: true,
          showConfirmButton: false,
          position: 'top-end',
          timer: 4000,
        })
      })
    },
    getCoupon() {
      Swal.fire({
        icon: 'info',
        title: '恭喜獲得優惠券',
        color: 'red',
        confirmButtonText: '複製',
        text: 'cafe90',
      }).then((result) => {
        if(result.isConfirmed) {
          const text = Swal.getHtmlContainer().textContent
          const btn = Swal.getConfirmButton()
          btn.addEventListener('click', this.copy(text))
        }
      })
      this.$refs.couponForm.resetForm()
    }
  }
}
</script>