<template>
  <section>
    <swiper
        class="slider"
        :slides-per-view="1"
        :loop="false"
        :navigation="{
          prevEl: '.leftArrow',
          nextEl: '.rightArrow'
        }"
        :pagination="{
          clickable: true
        }"
    >
      <div class="slider-nav leftArrow">
        <img src="../../assets/icons/leftArr.svg" alt="left arrow">
      </div>
      <div class="slider-nav rightArrow">
        <img src="../../assets/icons/rightArr.svg" alt="right arrow">
      </div>
      <swiper-slide v-for="(slide) in 4">
        <slider-item></slider-item>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SliderItem from "@/components/Slider/SliderItem";
SwiperCore.use([Navigation, Pagination, Scrollbar]);
export default {
  name: "TheSlider",
  components: {
    Swiper,
    SwiperSlide,
    SliderItem
  },
}
</script>

<style scoped lang="scss">
  .slider {
    position: relative;
  }
  .slider-nav {
    position: absolute;
    bottom: 166px;
    z-index: 1;
    cursor: pointer;
  }
  .leftArrow {
    left: 390px;
  }
  .rightArrow {
    right: 390px;
  }
</style>