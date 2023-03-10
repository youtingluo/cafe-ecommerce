<template>
  <div>
    <div class="position-relative">
      <img class="top-50 imgset bg-mask" src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80">
      <p class="position-absolute top-50 start-50 p-2
      bg-dark bg-opacity-50 translate-middle fs-1 text-white border-bottom border-4 border-light">
        XX 產品
      </p>
    </div>
    <div class="container mt-3">
      <img class="img-fluid mb-3" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="">
      <div class="text-center">
        <h1>曼特寧咖啡豆</h1>
        <h3>$320 / $400</h3>
        <p>以最上乘的拉丁美洲咖啡豆綜合而成，帶來核果及可可般的味覺體驗，最特別的是在餘味中不斷呈現出烘烤後的自然甜味。</p>
      </div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div class="btn btn-sm btn-primary d-block mt-2">加入購物車</div>

      <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-0" id="home-tab" data-bs-toggle="tab" data-bs-target="#standard-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">商品規格</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#return-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">退換貨須知</button>
        </li>
      </ul>
      <div class="tab-content py-3" id="myTabContent">
        <div class="tab-pane fade show" id="standard-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <ul>
            <li>產區：台灣</li>
            <li>風味：堅果</li>
            <li>保存期限：90天</li>
          </ul>
        </div>
        <div class="tab-pane fade" id="return-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <ol>
            <li>
              <p>
                請注意：除商品本身瑕疵外，為顧及個人衛生問題，拆封後恕無法退換貨，敬請見諒。
                務必保持商品及相關配件完整性，並請於收到商品日起 7
                天內（含假日）與我們聯繫，辦理換貨事宜（外包塑膠膜已撕開或商品塑膠袋已打開，即算開封狀態）
              </p>
            </li>
            <li>
              <p>
                依《消保法》規定，消費者有 7
                日商品鑑賞期之權益。猶豫期非試用期，
                商品需全新未開封，若商品已開封，恕無法辦理退貨退款手續。收到商品超過
                7 天，恕不接受退貨。
              </p>
            </li>
          </ol>
        </div>
      </div>

      <h3 class="h2 text-center">相關產品</h3>
      <div class="row">
        <div class="col-md-6 mb-2">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="產品">
            <div class="card-body">
              <h5 class="card-title">冰咖啡</h5>
              <p class="card-text">濃醇香</p>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-2">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="產品">
            <div class="card-body">
              <h5 class="card-title">冰咖啡</h5>
              <p class="card-text">濃醇香</p>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-link.active {
    background: #676767;
    color: #fff;
  }
</style>