<template>
  <div>
    <div class="position-relative">
      <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
      <p class="position-absolute top-50 start-50 p-2
      bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
        我的收藏
      </p>
    </div>

    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <a href="#">
            <div class="card product-card">
              <div class="card-head">
                <img class="card-img-top bg-cover" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="產品">
              </div>
              <div class="card-body">
                <h5 class="card-title">冰咖啡</h5>
                <p class="card-text">濃醇香濃濃醇香濃醇香</p>
                <div class="d-flex justify-content-between">
                  <button type="button" href="#" class="btn btn-outline-primary w-100">
                    <i class="bi bi-heart"></i>
                    取消收藏</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
