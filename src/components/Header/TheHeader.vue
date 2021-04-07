<template>
  <header class="header">
    <div class="container">
      <a href="#" class="header__logo logo">
        <img src="../../assets/logo.png" alt="colors logo">
      </a>
      <nav class="header__nav nav">
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
          <a href="#">0</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
name: "TheHeader"
}
</script>

<style scoped lang="scss">
  .header {
    padding: 36px 0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__nav {
      margin-left: 172px;
      margin-right: auto;
    }
    &__nav-list {
      display: flex;
      font-size: 14px;
    }
    &__nav-item {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
    &__contacts {
      margin-right: 116px;
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