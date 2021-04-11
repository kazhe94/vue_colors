<template>
  <div class="filter" :class="{'active': filter}">
    <div class="filter__inner">
      <div class="checkbox">
        <input id="new" type="checkbox">
        <label class="checkbox-control" for="new">Новинки</label>
      </div>
      <div class="checkbox">
        <input id="instock" type="checkbox">
        <label class="checkbox-control" for="instock">Есть в наличии</label>
      </div>
      <div class="checkbox">
        <input id="contract" type="checkbox">
        <label class="checkbox-control" for="contract">Контрактные</label>
      </div>
      <div class="checkbox">
        <input id="exclusive" type="checkbox">
        <label class="checkbox-control" for="exclusive">Эксклюзивные</label>
      </div>
      <div class="checkbox">
        <input id="sale" type="checkbox">
        <label class="checkbox-control" for="sale">Распродажа</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppFilter",
  props: {
    'filter': Boolean
  },

}
</script>

<style scoped lang="scss">
  .filter {
    min-width: 165px;
    transition: 0.3s;
    @media (max-width: 778px) {
      position: fixed;
      display: flex;
      justify-content: center;
      bottom: -100%;
      left: 0;
      z-index: 10;
      width: 100%;
      padding-top: 54px;
      padding-bottom: 114px;
      border-radius: 24px 24px 0px 0px;
      background-color: #FFFFFF;
    }
    &.active {
      bottom: 0;
    }
  }
  .checkbox {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  input[type=checkbox] {
    display: none;
    &:checked+.checkbox-control {
      &::before {
        background-color: var(--color-secondary);
      }
      &::after {
        transform: translateX(14px);
      }
    }
  }
  .checkbox-control {
    text-transform: uppercase;
    font-size: 12px;
    position: relative;
    padding-left: 48px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 36px;
      height: 22px;
      transition: 0.3s;
      border-radius: 22px;
      background-color: #F2F2F2;
      cursor: pointer;
    }
    &::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      transition: 0.3s;
      background-color: var(--color-primary);
      cursor: pointer;
    }
  }
</style>