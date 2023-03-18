<template>
  <div class="position-relative">
    <img class="top-50 imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
    關於我們
    </p>
  </div>
  <div class="container mt-3 about-section">
    <div class="subtitle text-center text-primarythree mb-3">ABOUT</div>
    <div class="row mb-7 align-items-center">
      <div class="col-md-6 mb-7 mb-md-0">
        <div class="position-relative about-outline">
          <img class="about-img img-fluid bg-cover position-relative" src="https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80">
        </div>
      </div>
      <div class="col-md-6">
        <p class="text-center about-content">
          <span>
            堅持用最高品質來對待每一顆咖啡豆<br />
            我們相信<br />
            只有用心烘焙、精心沖泡、細心品味<br />
            才能釋放出咖啡的真正魅力<br />
            我們不僅是咖啡的愛好者<br />
            也是咖啡的藝術家<br />
            我們希望用我們的熱情和創意<br />
            為你帶來一杯杯令人驚艷的咖啡
          </span>
        </p>
      </div>
    </div>
    <div class="row mb-7">
      <div class="col-md-6 order-2 order-md-1">
        <div class="subtitle text-center text-primarythree mb-3">BRAND</div>
        <p class="text-center">希望您在品嚐 Cafe beat 的咖啡時</p>
        <p class="text-center">你可以感受到咖啡的香氣、滋味、溫度和情感。</p>
      </div>
      <div class="col-md-6 mb-7 order-1 order-md-2">
        <div class="position-relative about-outline">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" alt="">
        </div>
      </div>
    </div>
    <div class="row mb-7">
      <div class="col-md-6 mb-7">
        <div class="position-relative about-outline">
          <img class="img-fluid about-img bg-cover position-relative" src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="subtitle text-center text-primarythree mb-3">LOCAL</div>
        <p class="text-center about-content">
          <span>
            我們也大量使用在地咖啡豆<br />
            製作出最具台灣味的咖啡<br />
            讓你的每一口都有台灣的元素<br />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/mixin';
.subtitle {
  font-size: 146px;
  @include pad {
    font-size: 60px;
  }
}
.about-content {
  line-height: 2.4;
}
.about-outline::after {
  content: '';
  position: absolute;
  display: block;
  border: 1px solid #078499;
  left: -15px;
  right: 15px;
  bottom: -15px;
  top: 10px;
  z-index: -1;
}
.about-img {
  width: 100%;
  max-height: 600px;
}
</style>