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
        <div class="cart__count">{{ cartCount }} товара(-ов)</div>
        <button class="cart__clear" @click="clearCart">Очистить список</button>
      </div>
      <ul class="cart__body">
        <cart-item
            v-for="(value, key) in cart"
            :key="key"
            :count="value"
            :id="key"
        ></cart-item>
        <h2 v-if="isEmpty" class="empty-text">Корзина пока пуста</h2>
      </ul>
    </div>
    <div class="cart__summary">
      <div class="cart__summary-text">
        <div class="cart__summary-title">Итого</div>
        <div class="cart__summary-total">{{ total }}₽</div>
      </div>
      <button class="cart__summary-btn" :disabled="isEmpty">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem";
import {useStore} from "vuex";
import {computed} from "vue";
import {useCartPage} from "@/use/useCartPage";

export default {
  name: "TheCart",
  components: {
    CartItem
  },
  setup() {
    const store = useStore()
    const clearCart = () => {
      store.commit('cart/clear')
    }
    return {
      ...useCartPage(),
      clearCart
    }
  }
}
</script>

<style lang="scss">
  .empty-text {
    padding-top: 20px;
    border-top: 1px solid rgba(#000, 0.1);
  }
  .cart {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    width: 600px;
    height: 100vh;
    padding: 40px;
    overflow: auto;
    background-color: #fff;
    @media (max-width: 778px) {
      width: 100%;
    }
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
    &__body {
      margin-bottom: 126px;
    }
    &__summary {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 600px;
      padding: 40px 40px;
      display: flex;
      align-items: center;
      background-color: #fff;
      justify-content: space-between;
      @media (max-width: 610px) {
        width: 100%;
      }
      &-title {
        font-size: 16px;
        margin-bottom: 6px;
      }
      &-total {
        font-size: 30px;
        font-weight: 500;
        line-height: 1;
        @media (max-width: 468px) {
          font-size: 24px;
        }
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
        @media (max-width: 468px) {
          width: 160px;
          height: 40px;
          line-height: 40px;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>