<template>
  <div class="slider__item" :style="{
    backgroundImage: 'url(./slider/slider.jpg)'
  }">
    <div class="slider__text">
      <h2 class="slider__title">Краски</h2>
      <p class="slider__desc">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItem"
}
</script>

<style scoped>
  .slider__item {
    height: 560px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider__title {
    margin-bottom: 24px;
    font-size: 72px;
    font-weight: 400;
    text-align: center;
  }
  .slider__desc {
    max-width: 472px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.3;
  }
</style>