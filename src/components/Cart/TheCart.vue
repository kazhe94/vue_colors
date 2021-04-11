<template>
  <div class="cart">
    <div class="cart__top">
      <h2 class="cart__title">Корзина</h2>
      <button class="cart__close" @click="$emit('closeCart')">
        <span></span>
      </button>
    </div>
    <div class="cart__table">
      <div class="cart__header">
        <div class="cart__count">4 товара</div>
        <button class="cart__clear">Очистить список</button>
      </div>
      <div class="cart__body">
        <cart-item></cart-item>
        <cart-item></cart-item>
        <cart-item></cart-item>
      </div>
    </div>
    <div class="cart__summary">
      <div class="cart__summary-text">
        <div class="cart__summary-title">Итого</div>
        <div class="cart__summary-total">14 400₽</div>
      </div>
      <div class="cart__summary-btn">Оформить заказ</div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem";

export default {
  name: "TheCart",
  components: {
    CartItem
  }
}
</script>

<style scoped lang="scss">
  .cart {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    width: 600px;
    height: 100vh;
    padding: 40px;
    background-color: #fff;
    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 80px;
    }
    &__title {
      font-size: 30px;
      font-weight: 500;
    }
    &__close {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid rgba(#000, 0.1);
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: rgba(#000, 0.1);
      }
      span {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        &::before, &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 50%;
          display: block;
          width: 100%;
          height: 1.4px;
          background-color: var(--color-primary);
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 10px;
    }
    &__count {

    }
    &__clear {
      border: none;
      border-bottom: 1px solid transparent;
      background-color: transparent;
      color: rgba(#000, 0.4);
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        border-color: rgba(#000, 0.4);
      }
    }
    &__summary {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 40px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-title {
        font-size: 16px;
        margin-bottom: 6px;
      }
      &-total {
        font-size: 30px;
        font-weight: 500;
        line-height: 1;
      }
      &-btn {
        width: 240px;
        height: 56px;
        text-align: center;
        text-transform: uppercase;
        line-height: 56px;
        background-color: var(--color-secondary);
        border: none;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>