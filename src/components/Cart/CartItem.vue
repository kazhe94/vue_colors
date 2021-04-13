<template>
  <li class="cart-item" :class="{'deleted': !count}">
    <div class="cart-item__image">
      <img :src="product.img" alt="color">
    </div>
    <div class="cart-item__desc">
      <h3 class="cart-item__title product__title">{{ product.title }}</h3>
      <h4 class="cart-item__price product__price">{{ product.price }} ₽</h4>
    </div>
    <cart-controls :count="count" :id="id"></cart-controls>
  </li>
</template>

<script>
import CartControls from "@/components/Cart/CartControls";
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  name: "CartItem",
  components: {
    CartControls
  },
  props: ['count', 'id'],
  setup(props) {
    const store = useStore()
    const product = computed(() => store.getters['products/products'].find(item => item.id == props.id))
    return {
      product,
    }
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    align-items: center;
    padding: 26px 0;
    border-top: 1px solid rgba(#000, 0.1);
    @media (max-width: 778px) {
      justify-content: center;
    }
    @media (max-width: 468px) {
      flex-wrap: wrap;
    }

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
      @media (max-width: 468px) {
        margin-right: 0;
      }
    }
    &__title {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
  .deleted>:not(:last-child) {
    opacity: 0.4;
  }
</style>