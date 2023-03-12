<template>
  <div>
    <div class="position-relative">
      <img class="top-50 imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
      <p class="position-absolute top-50 start-50 p-2
      bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      <i class="bi bi-cup-hot"></i> 產品
      </p>
    </div>
    <div class="container mt-3">
      <select class="form-select mb-3">
        <option selected>篩選類別</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-2">
          <a href="#">
            <div class="card product-card">
              <div class="card-head">
                <img class="card-img-top bg-cover" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="產品">
              </div>
              <div class="card-body">
                <h5 class="card-title">冰咖啡</h5>
                <p class="card-text">濃醇香濃濃醇香濃醇香</p>
                <div class="d-flex justify-content-between">
                  <button type="button" href="#" class="btn btn-primary me-auto">加入購物車</button>
                  <button type="button" href="#" class="btn btn-outline-primary">
                    <i class="bi bi-heart"></i>
                    加入收藏</button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 mb-2">
          <a href="#">
            <div class="card product-card">
              <div class="card-head">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="產品">
              </div>
              <div class="card-body">
                <h5 class="card-title">冰咖啡</h5>
                <p class="card-text">濃醇香</p>
                <div class="d-flex justify-content-between">
                  <button type="button" href="#" class="btn btn-primary me-auto">加入購物車</button>
                  <button type="button" href="#" class="btn btn-outline-primary">
                    <i class="bi bi-heart"></i>
                    加入收藏</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.card-head {
  overflow: hidden;
}
.like-button {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  color: white;
  z-index: 5;
  &:hover {
    border: 2px solid red;
    color: red;
  }
}
  .product-card {
    overflow: hidden;
    img {
      transition: .3s;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
</style>