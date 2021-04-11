<template>
  <div class="cart-controls">
    <div class="cart-controls__count">
      <button class="cart-controls__btn">-</button>
      <div class="cart-controls__quantity">0</div>
      <button class="cart-controls__btn">+</button>
    </div>
    <button class="cart-controls__remove">
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
name: "CartControls"
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
    }
    &__quantity {
      margin: 0 20px;
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