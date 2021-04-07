<template>
  <div class="product">
    <div class="product__img">
      <img :src="'./colors/color1.png'" alt="color">
    </div>
    <div class="product__desc">
      <div class="product__title">Краска Wallquest, Brownsone MS90102</div>
      <div class="product__price">6000 ₽</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProduct"
}
</script>

<style scoped lang="scss">
  .product {
    position: relative;
    //width: 278px;
    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      display: block;
      height: 1px;
      background-color: rgba(#000, 0.1);
      width: 100%;
    }
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 278px;
      margin-bottom: 16px;
    }
    &__desc {
      font-size: 16px;
      padding-bottom: 2px;
    }
    &__title {
      font-weight: 300;
      margin-bottom: 24px;
    }
    &__price {
      font-weight: 600;
    }
  }
</style>