<template>
  <div class="position-relative">
    <img
      class="imgset"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      購物完成
    </p>
  </div>

  <div class="container min-body-heigh py-lg-9 py-4">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-success">結帳完成 ヽ(*´∀`)ﾉﾟ</h1>
      <p class="mt-3">感謝您的付款，我們非常感激您的支持和信任。<br>
        您的滿意是我們最大的動力，期待您再次光臨！<br><br>
        我們堅持最新鮮的咖啡豆送到顧客手上<br>
        請耐心等候我們的出貨通知！ 您也可以繼續購買支持我們 ~♥
      </p>
      <button type="button" class="btn btn-lg btn-outline-success" @click="() => $router.push('/')">
        繼續購物
      </button>
    </div>
  </div>
</template>