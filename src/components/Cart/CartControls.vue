<template>
  <div class="cart-controls">
    <div class="cart-controls__count">
      <button class="cart-controls__btn" @click="remove" :disabled="!count">-</button>
      <div class="cart-controls__quantity">{{ count }}</div>
      <button class="cart-controls__btn" @click="add" :disabled="!count">+</button>
    </div>
    <button v-if="count" class="cart-controls__remove" @click="deleteItem">
      <span></span>
    </button>
    <button v-else class="cart-controls__renew" @click="add">
    </button>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "CartControls",
  props: ['count', 'id'],
  setup(props) {
    const store = useStore()
    const add = () => {
      store.commit('cart/add', props.id)
    }
    const remove = () => {
      store.commit('cart/remove', props.id)
    }
    const deleteItem = () => {
      store.commit('cart/deleteItem', props.id)
    }
    return {
      add,
      remove,
      deleteItem
    }
  }
}
</script>

<style lang="scss">
  .cart-controls {
    display: flex;
    align-items: center;
    &__count {
      display: flex;
      align-items: center;
      margin-right: 37px;
    }
    &__btn {
      width: 40px;
      height: 24px;
      font-size: 16px;
      font-weight: 500;
      background-color: #F2F2F2;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: var(--color-secondary);
      }
    }
    &__quantity {
      margin: 0 20px;
    }
    &__renew {
      width: 24px;
      height: 24px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      background-image: url(../../assets/icons/repeat.svg);
    }
    &__remove {
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:hover {
        span {
          &::before, &::after {
            background-color: var(--color-primary);
          }
        }
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
          transition: 0.3s;
          background-color: rgba(#1F2020, 0.2);
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }

  }
</style>