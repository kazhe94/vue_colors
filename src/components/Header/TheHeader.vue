<template>
  <header class="header">
    <div class="container">
      <a href="#"
         class="burger-menu"
         :class="{'active': burger}"
         @click.prevent="burger = !burger"
      >
        <span></span>
      </a>
      <a href="#" class="header__logo logo">
        <img src="../../assets/logo.png" alt="colors logo">
      </a>
      <nav class="header__nav" :class="{'active': burger}">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="" class="header__nav-link">Продукты</a>
          </li>
          <li class="header__nav-item">
            <a href="" class="header__nav-link">Цвета</a>
          </li>
          <li class="header__nav-item">
            <a href="" class="header__nav-link">Вдохновение</a>
          </li>
          <li class="header__nav-item">
            <a href="" class="header__nav-link">Советы</a>
          </li>
          <li class="header__nav-item">
            <a href="" class="header__nav-link">Найти магазин</a>
          </li>
          <ul class="mobile-links">
            <li class="header__controls-item--search">
              <a href="#"><span>Поиск</span></a>
            </li>
            <li class="header__controls-item--profile">
              <a href="#"><span>Профиль</span></a>
            </li>
            <li class="header__controls-item--faves">
              <a href="#"><span>Избранное</span></a>
            </li>
            <li>
              <a href="tel:+74952217769" class="header__phone phone">+7 (495) 221-77-69</a>
            </li>
          </ul>
        </ul>
      </nav>
      <address class="header__contacts">
        <a href="tel:+74952217769" class="header__phone phone">+7 (495) 221-77-69</a>
        <a href="#" class="callback-btn">Заказать звонок</a>
      </address>
      <ul class="header__controls">
        <li class="header__controls-item header__controls-item--search">
          <a href="#"></a>
        </li>
        <li class="header__controls-item header__controls-item--profile">
          <a href="#"></a>
        </li>
        <li class="header__controls-item header__controls-item--faves">
          <a href="#"></a>
        </li>
        <li class="header__controls-item header__controls-item--cart">
          <a href="#" @click.prevent="$emit('openCart')">{{ cartCount }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import {computed, ref} from 'vue'
import {useStore} from "vuex";
export default {
  name: "TheHeader",

  setup() {
    const store = useStore()
    const burger = ref(false)
    const cartCount = computed(() => store.getters['cart/cartCount'])
    console.log(cartCount.value)
    return {
      burger,
      cartCount
    }
  },
}
</script>

<style lang="scss">
  .mobile-links {
    display: none;
    text-align: center;
    @media (max-width: 1089px) {
      display: block;
    }
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid transparent;
      transition: 0.3s;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        border-color: var(--color-primary);
      }
      .phone {
        padding-left: 0;
      }
    }
    li a {
      background-position: left;
      padding-left: 30px;
    }
  }
  .burger-menu {
    position: relative;
    display: none;
    width: 24px;
    height: 14px;
    span {
      position: absolute;
      top: 50%;
      display: block;
      width: 24px;
      height: 2px;
      background: var(--color-primary);
      &::before,&::after {
        content: '';
        position: absolute;
        display: block;
        width: 24px;
        height: 2px;
        transition: 0.4s;
        background-color: var(--color-primary);
      }
      &::before {
        transform: translateY(-6px);
      }
      &::after {
        transform: translateY(6px);
      }
    }
    @media (max-width: 1089px){
      display: block;
    }
  }
  .burger-menu.active {
    span {
      background: transparent;
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
  .header {
    padding: 36px 0;
    @media (max-width: 1089px) {
      position: relative;
      padding: 20px 0;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        background: rgba(#1F2020, 0.06);
      }
    }
    @media (max-width: 778px) {
      margin-bottom: 17px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo {
      img {
        display: block;
        @media (max-width: 1089px) {
          height: 21px;
        }
      }
    }
    &__nav {
      margin-left: 172px;
      margin-right: auto;
      transition: 0.4s;
      @media(max-width: 1300px) {
        margin-left: 50px;
      }
      @media (max-width: 1089px){
        position: fixed;
        left: -100%;
        padding: 30px;
        top: 64px;
        z-index: 10;
        width: 100%;
        margin-left: 0;
        background-color: #fff;
        border: 1px solid #eee;
      }
      &.active {
        left: 0;
      }
    }
    &__nav-list {
      display: flex;
      font-size: 14px;
      @media (max-width: 1089px){
        flex-direction: column;
        align-items: center;
      }
    }
    &__nav-item {
      border-bottom: 1px solid transparent;
      transition: 0.3s;
      &:hover {
        border-color: var(--color-primary);
      }
      &:not(:last-child) {
        margin-right: 24px;
        @media (max-width: 1089px){
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
    &__contacts {
      margin-right: 116px;
      @media(max-width: 1300px) {
        margin-right: 50px;
      }
      @media (max-width: 1089px) {
        display: none;
      }
      a {
        display: block;
      }
      .header__phone {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 2px;
      }
      .callback-btn {
        font-size: 14px;
        color: rgba(#1F2020 ,0.3);
      }
    }
    &__controls {
      display: flex;
      align-items: center;
      &-item {
        &:not(:last-child) {
          margin-right: 24px;
          @media (max-width: 1089px) {
            display: none;
          }
        }
        a {
          display: block;
          width: 24px;
          height: 24px;
        }
        &--search a {
          background-image: url(../../assets/icons/search.svg);
          background-repeat: no-repeat;
          background-position: center;
        }
        &--profile a {
          background-image: url(../../assets/icons/profile.svg);
          background-repeat: no-repeat;
          background-position: center;
        }
        &--faves a {
          background-image: url(../../assets/icons/heart.svg);
          background-repeat: no-repeat;
          background-position: center;
        }
        &--cart a {
          background-color: var(--color-secondary);
          border-radius: 50%;
          text-align: center;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
  }
</style>