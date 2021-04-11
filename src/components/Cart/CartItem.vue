<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="'./colors/color1.png'" alt="color">
    </div>
    <div class="cart-item__desc">
      <h3 class="cart-item__title product__title">Краска Wallquest, Brownsone MS90102</h3>
      <h4 class="cart-item__price product__price">6000 ₽</h4>
    </div>
    <cart-controls></cart-controls>
  </div>
</template>

<script>
import CartControls from "@/components/Cart/CartControls";

export default {
  name: "CartItem",
  components: {
    CartControls
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    align-items: center;
    padding: 26px 0;
    border-top: 1px solid rgba(#000, 0.1);
    &__image {
      margin-right: 8px;
      img {
        display: block;
        width: 96px;
        height: 96px;
        object-fit: cover;
      }
    }
    &__desc {
      width: 165px;
      margin-right: 62px;
    }
    &__title {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
</style>