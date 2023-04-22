<template>
  <div class="my-6 ">
    <h2 class="text-center mb-3">結帳流程</h2>
    <div class="text-center process-wrap text-nowrap g-1">
      <div class="d-inline-block">
        <div class="process border border-primary p-2 rounded rounded-3 active">
          確認品項
        </div>
      </div>
      <div class="d-inline-block">
        <div class="process border border-primary p-2 rounded rounded-3"
          :class="{ active: $route.name === 'pay' || $route.name === 'confirmPay' }">
          填寫資料
        </div>
      </div>
      <div class="d-inline-block">
        <div class="process border border-primary p-2 rounded rounded-3"
          :class="{ active: $route.name === 'confirmPay' }">
          前往付款
        </div>
      </div>
      <div class="d-inline-block">
        <div class="process border border-primary p-2 rounded rounded-3 me-0"
          :class="{ active: isPaid }">
          結帳成功
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isPaid']
}
</script>
<style lang="scss">
  .process {
    position: relative;
    background-color: #fff;
    width: 110px;
    margin-right: 20px;
    &.active {
      transform: scaleY(1.1);
      background: #676767;
      color: #FCF8F3;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 50%;
      left: 100%;
      width: 50%;
      z-index: -1;
      height: 3px;
      background: #676767;
    }
    @media screen and (max-width: 768px){
      font-size: 12px;
      width: 70px;
      margin-right: 20px;
    }
    @media screen and (max-width: 321px){
      margin-right: 5px;
    } 
  }
  .process-wrap .d-inline-block:last-child .process:after {
    content: '';
    display: none;
  }
</style>