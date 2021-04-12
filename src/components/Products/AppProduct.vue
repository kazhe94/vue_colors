<template>
  <li class="product">
    <div class="product__img">
      <img :src="product.img" alt="color">
    </div>
    <div class="product__desc">
      <div class="product__title">{{ product.title }}</div>
      <div class="product__control">
        <div class="product__price">{{ product.price }} ₽</div>
        <button class="product__add" @click="addToCart">+</button>
      </div>
    </div>
  </li>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "AppProduct",
  props: ['product'],
  setup(props) {
    const store = useStore()
    const addToCart = () => {
      store.commit('cart/add', props.product.id)
    }
    return {
      addToCart
    }
  }
}
</script>

<style lang="scss">
  .product {
    position: relative;
    width: 278px;
    @media (max-width: 1225px) {
      width: 156px;
    }
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
      margin-bottom: 16px;
      height: 278px;
      @media (max-width: 1225px) {
        height: 156px;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

    }
    &__desc {
      font-size: 16px;
      padding-bottom: 2px;
    }
    &__title {
      font-weight: 300;
      margin-bottom: 24px;
    }
    &__control {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__price {
      font-weight: 600;
    }
    &__add {
      width: 80px;
      height: 32px;
      border: none;
      border-radius: 8px;
      background-color: #F2F2F2;
      font-size: 20px;
      transition: 0.3s;
      cursor: pointer;
      @media (max-width: 1225px) {
        width: 40px;
        border-radius: 4px;
        height: 24px;
      }
      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }
</style>