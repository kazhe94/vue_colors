<template>
  <div class="filter">
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
</template>

<script>
export default {
  name: "AppFilter"
}
</script>

<style scoped lang="scss">
  .filter {
    min-width: 165px;
    //margin-right: 30px;
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
      background-color: #F2F2F2;;
    }
    &::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      transition: 0.3s;
      background-color: var(--color-primary);
    }
  }
</style>