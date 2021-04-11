<template>
  <ul class="breadcrumbs">
    <li><a href="#">Главная</a></li>
    <li><a href="#">Продукты</a></li>
    <li><a href="#">Краски</a></li>
  </ul>
</template>

<script>
export default {
  name: "AppBreadcrumbs"
}
</script>

<style scoped lang="scss">
  .breadcrumbs {
    position: absolute;
    top: 32px;
    left: 64px;
    z-index: 3;
    display: flex;
    font-size: 10px;
    color: rgba(#FFFFFF, 0.3);
    @media (max-width: 778px) {
      color: rgba(#1F2020, 0.3);
      position: static;
      padding: 0 24px;
    }
    li {
      position: relative;
      &:not(:last-child) {
        margin-right: 19px;
        &::after {
          content: '';
          position: absolute;
          background-color: rgba(#FFFFFF, 0.3);
          top: 50%;
          transform: translate(50%, -50%);
          right: -8px;
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          @media (max-width: 778px) {
            background-color: #C4C4C4;
          }
        }
      }
    }
  }
</style>