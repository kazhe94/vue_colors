<template>
  <section class="slider">
    <app-breadcrumbs></app-breadcrumbs>
    <swiper
        class="slider__wrap"
        :slides-per-view="1"
        :loop="false"
        :navigation="{
          prevEl: '.leftArrow',
          nextEl: '.rightArrow'
        }"
        :pagination="{
          clickable: true,

        }"
    >
      <div class="slider-nav leftArrow">
        <img src="../../assets/icons/leftArr.svg" alt="left arrow">
      </div>
      <div class="slider-nav rightArrow">
        <img src="../../assets/icons/rightArr.svg" alt="right arrow">
      </div>
      <swiper-slide v-for="slide in 4">
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
import AppBreadcrumbs from "@/components/UI/AppBreadcrumbs";
SwiperCore.use([Navigation, Pagination, Scrollbar]);
export default {
  name: "TheSlider",
  components: {
    Swiper,
    SwiperSlide,
    SliderItem,
    AppBreadcrumbs
  },
}
</script>

<style lang="scss">
  .slider {
    position: relative;
  }
  .slider__wrap {
    position: relative;
    @media (max-width: 778px) {
      display: none;
    }
  }
  .slider-nav {
    position: absolute;
    bottom: 166px;
    z-index: 1;
    cursor: pointer;
  }
  .leftArrow {
    left: 390px;
    @media (max-width: 1300px) {
      left: 100px;
    }
  }
  .rightArrow {
    right: 390px;
    @media (max-width: 1300px) {
      right: 100px;
    }
  }
  .swiper-button-disabled {
    display: none;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    width: 124px;
    height: 32px;
    left: 50%;
  }
  .swiper-pagination {
    transform: translateX(-50%);
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.4);
    padding: 13px 0;
  }
  .swiper-pagination-bullet {
    transform: translateY(-10px);
    width: 6px;
    height: 6px;
    background: rgba(#FFFFFF, 0.4);
  }
  .swiper-pagination-bullet-active {
    background: #FFFFFF;
  }
</style>