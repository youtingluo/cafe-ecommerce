<template>
  <div class="position-relative">
    <img
      class="top-50 imgset"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1679368088772.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gkPGxdJV09tlG7eTyLkc3UlmhEM8fwVRUM%2BGt885Sz2ZHBfJU132NUGaF0phyjiGlaFHaCl1Hi4btvrI5848F5v5eRFi5LjyN4wJbKpa9%2FzD8tMlwU13ZC4hN4EL5XpFGwLHSa9sDfPWh9UySEWyZvoXbM98yXi6RgGKGbPMTYr%2FWOJbm46bzCkgwyU3xCMmWkrhqzmaxeA1l900dRYxpeaHvcANukTdsBdyC0d4QBIDJusZohHbJE0E8tjAInbDsYx466vGO4Buyg4qD8irn78jjYeOaTzQiCOBgWOL0GZPjiUI6I1fO3cvObMiloDB1QhWYwViuR652egoDOuR6g%3D%3D"
    />
    <p
      class="position-absolute top-50 start-50 p-2 bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light"
    >
      404 NOT FOUND
    </p>
  </div>
  <div
    class="container my-3 min-body-heigh d-flex flex-column align-items-center justify-content-center"
  >
    <div class="mb-5 text-center">
      <h1>找不到此頁面</h1>
      <i class="bi bi-emoji-frown-fill text-warning" style="font-size: 5rem"></i>
    </div>
    <div>
      <router-link class="btn btn-primary d-inline-block" to="/products">回首頁</router-link>
    </div>
  </div>
</template>
