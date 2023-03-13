<template>
  <div class="position-relative">
    <img class="imgset" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
    <p class="position-absolute top-50 start-50 p-2
    bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
      填寫資料
    </p>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <form>
          <div class="form-floating mb-2 mb-md-3">
            <input type="text" class="form-control" id="name" placeholder="請輸入姓名">
            <label for="name">
              姓名 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <input type="email" class="form-control" id="email" placeholder="請輸入信箱">
            <label for="email">
              信箱 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <input type="tel" class="form-control" id="tel" placeholder="請輸入電話">
            <label for="tel">
              電話 <span class="text-danger">*</span>
            </label>
          </div>
          <div class="form-floating mb-2 mb-md-3">
            <textarea class="form-control" placeholder="想對我們說的話" id="Textarea"></textarea>
            <label for="Textarea">留言</label>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <button type="button" class="btn btn-outline-primary w-100">修改購物車</button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary ms-auto w-100">前往付款</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>