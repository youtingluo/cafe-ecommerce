<template>
  <div class="banner position-relative top-0 end-0 d-flex align-items-center justify-content-start">
    <div class="container">
      <img class="banner-text position-absolute d-none d-lg-block" src="@/image/text.png" alt="text">
      <img class="position-absolute d-block d-lg-none" src="@/image/text-mobile.png" alt="text">
    </div>
  </div>
  
  <section class="d-flex flex-column align-items-center flex-wrap py-lg-7 py-4">
    <div class="h3 ubunto">
      explore
    </div>
    <div class="bar"></div>
  </section>

  <!-- explore -->
  <section class="pb-md-9 pt-md-7 py-4 py-md-0">
    <div class="container">
      <div class="row align-items-center g-0">
        <div class="col-md-6 mb-3 mb-md-0">
          <img class="img-fluid bg-cover" src="@/image/explore1.png" alt="explore1">
        </div>
        <div class="col-md-6 mb-3 mb-md-0">
          <p class="h5 text-center mb-3 kiwi">繁忙工作中 治癒疲憊身心的飲品</p>
          <p class="h5 text-center kiwi">日常生活中 體驗多變精彩的人生</p>
        </div>
      </div>
      <div class="row align-items-center g-0">
        <div class="col-md-6 order-md-2 mb-3 mb-md-0">
          <img class="img-fluid bg-cover order-md-1" src="@/image/explore2.png" alt="explore1">
        </div>
        <div class="col-md-6 order-md-1">
          <div class="text-center">
            <p class="h6 text-center mb-3 kiwi">尋找屬於你的味道</p>
            <button class="btn btn-light fw-bold text-primary border explore-button rounded-1" type="button">探索商品</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 知識 -->
  <section class="py-lg-9 py-4">
    <div class="container">
      <h2 class="fs-7 text-center waterfall">Knowledge</h2>
      <h2 class="h5 text-center kiwi mb-6">知識</h2>
      <div class="row align-items-end mb-3 mb-lg-7">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div class="bg-white bg-opacity-90 writing-vertical px-2 py-4  kiwi  letter-space position-absolute top-0 ms-3">
            <span class="h3">淺焙</span>最原始的風味
          </div>
          <img class="img-fluid" src="@/image/knowledge1.png" alt="knowledge1">
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>淺焙咖啡最重要的特色在於咖啡的「原始酸味」
  優質的淺焙咖啡豆具有清爽的花香或果香，部分還能感受到咖啡果實的甜味！</p>
            <p>如果想來杯爽口、沒有厚重苦味的咖啡，淺焙咖啡豆絕對是不二之選！</p>
          </div>
        </div>
      </div>

      <div class="row align-items-end mb-3 mb-lg-7">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div class="bg-white bg-opacity-90 writing-vertical px-2 py-4  kiwi  letter-space position-absolute top-0 ms-3">
            <span class="h3">中焙</span>醇厚與酸味的平衡
          </div>
          <img class="img-fluid" src="@/image/knowledge2.png" alt="knowledge2">
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>中焙咖啡豆讓你親身體驗到咖啡的「絕妙平衡」經過中度烘焙後，能保留部分原始咖啡豆風味，
              除了巧克力般的苦味，也能感受到淡雅的水果香氣。</p>
            <p>香氣適中的中焙，能讓您同時品嘗多元變化。</p>
          </div>
        </div>
      </div>

      <div class="row align-items-end mb-3">
        <div class="col-lg-6 offset-lg-2 position-relative">
          <div class="bg-white bg-opacity-90 writing-vertical px-2 py-4  kiwi  letter-space position-absolute top-0 ms-3">
            <span class="h3">深焙</span>醇厚且濃烈的口感
          </div>
          <img class="img-fluid" src="@/image/knowledge3.png" alt="knowledge3">
        </div>
        <div class="col-lg-4 offset-n1 z-index-3">
          <div class="py-7 px-5 bg-secondary mb-3 bg-opacity-90 letter-space">
            <p>深焙咖啡豆的特徵是「苦味濃郁」藉由深度烘焙，將原本沒有苦味的咖啡生豆，淬煉出絕佳的焦苦風味與濃郁口感。</p>
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
          <img class="filter img-fluid" src="@/image/promise1.png" alt="promise1">
          <div class="position-absolute">
            <div class="text-white fs-5">新鮮原豆</div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
          <img class="filter img-fluid" src="@/image/promise2.png" alt="promise2">
          <div class="position-absolute">
            <div class="text-white fs-5">當日配送</div>
          </div>
        </div><div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
          <img class="filter img-fluid" src="@/image/promise3.png" alt="promise3">
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
          <div class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3">
            <span class="h3">聞香而來</span><span class="align-text-bottom">—</span> 咖啡豆系列
          </div>
          <img class="img-fluid" src="@/image/shopping1.png" alt="shopping1">
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3"><div class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3">
            <span class="h3">視覺饗宴</span><span class="align-text-bottom">—</span> 咖啡杯系列
          </div>
          <img class="img-fluid" src="@/image/shopping2.png" alt="shopping2">
        </div>
        <div class="col-md-4 position-relative mb-md-0 mb-3"><div class="writing-vertical text-white px-2 py-4 align-middle kiwi letter-space position-absolute top-0 ms-3">
            <span class="h3">大師養成</span><span class="align-text-bottom">—</span> 咖啡用具系列
          </div>
          <img class="img-fluid" src="@/image/shopping3.png" alt="shopping3">
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
            <div class="h5">獲得優惠</div>
            <div class="h6 text-primaryfour">不定期分享咖啡知識與限定優惠</div>
            <div class="input-group w-50 mx-auto mt-4">
              <input type="text" class="form-control rounded-1" placeholder="請輸入 Email">
              <button class="btn btn-light border border-1 rounded-1 text-primary" type="button">送出</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </section>

  <!-- footer -->
  <footer class="py-4 text-center bg-secondary bg-opacity-90">
    <p>
      © 2023 Cafe Beat All rights reserved.
      <br>
      僅作個人練習，無商業用途
    </p>
  </footer>
</template>

<style lang="scss">
.banner {
  background-image: url(@/image/banner.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 868px;
  max-height: 90vh;
  @media (max-width: 769px) {
    max-height: 342px;
    background-attachment: initial;
  }
}
.banner-text {
  transform: translateY(-20%);
}
.explore-button {
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.bar { 
  border: 2px solid #C9C9C9;
  width: 60px;
  height: 0px;
  margin-top: 40px;
  transform: rotate(90deg);
  @media (max-width: 768px) {
    width: 40px;
  }
}

.promise {
  background-color: rgba(252, 248, 243, 0.9);
  @media (max-width: 769px) {
    background-color: #fff;
  }
}
.filter {
  filter: brightness(76%);
}
.coupon {
  border: 2px solid #fff;
  box-shadow: 0 0 0 12px #EFEEED;
}
</style>
