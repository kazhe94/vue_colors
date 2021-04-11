<template>
  <the-header @openCart="cart = true"></the-header>
  <the-slider></the-slider>
  <div class="container">
    <div class="page-title">Краски</div>
  </div>
  <div class="products">
    <div class="container">
      <app-filter :filter="filter"></app-filter>
      <div class="products__wrap">
        <div class="products__props">
          <div class="products__count">412 товаров</div>
          <a href="#" class="products__filter" @click.prevent="filter = true">Фильтры</a>
          <div class="products__sort">
            <select id="price">
              <option value="cheap">Сначала недорогие</option>
              <option value="expensive">Сначала дорогие</option>
              <option value="popular">Сначала популярные</option>
              <option value="new">Сначала новые</option>
            </select>
          </div>
        </div>
        <ul class="products__grid">
          <app-product v-for="item in 15"></app-product>
        </ul>
      </div>
    </div>
  </div>
  <teleport to="body">
    <app-backdrop v-if="filter || cart" @close="filter = false"></app-backdrop>
  </teleport>
  <teleport to="body">
    <transition name="slide">
      <the-cart
          v-if="cart"
          @closeCart="cart = false"
      >
      </the-cart>
    </transition>
  </teleport>
  <footer class="footer"></footer>
</template>

<script>
// @ is an alias to /src

import TheHeader from "@/components/Header/TheHeader";
import TheSlider from "@/components/Slider/TheSlider";
import AppProduct from "@/components/Products/AppProduct";
import AppFilter from "@/components/Products/AppFilter";
import AppBackdrop from "@/components/UI/AppBackdrop";
import {ref, watch} from "vue";
import TheCart from "@/components/Cart/TheCart";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheSlider,
    AppProduct,
    AppFilter,
    AppBackdrop,
    TheCart
  },
  setup() {
    const filter = ref(false)
    const cart = ref(false)
    return {
      filter,
      cart
    }
  }
}
</script>
<style lang="scss">
.page-title {
  display: none;
  margin: 48px 0;
  font-size: 36px;
  @media (max-width: 778px) {
    display: block;
  }
}
.products {
  padding-top: 72px;
  padding-bottom: 140px;
  @media (max-width: 778px) {
    padding-bottom: 64px;
    padding-top: 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__wrap {
    width: 100%;
    margin-right: 0;
    margin-left: 138px;
    @media (max-width: 778px) {
      margin-left: 0;
    }
  }
  &__props {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
  }
  &__count {
    @media (max-width: 778px) {
      display: none;
    }
  }
  &__filter {
    display: none;
    border: none;
    background: transparent;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    @media (max-width: 778px) {
      display: block;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 278px);
    grid-column-gap: 24px;
    justify-content: center;
    grid-row-gap: 33px;
  }
  @media (min-width: 1830px) {
    li:nth-child(5n+1):nth-last-child(-n+5),
    li:nth-child(5n+1):nth-last-child(-n+5) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (min-width: 1224px) {
    li:nth-child(4n+1):nth-last-child(-n+4),
    li:nth-child(4n+1):nth-last-child(-n+4) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (max-width: 1224px) {
    li:nth-child(2n+1):nth-last-child(-n+2),
    li:nth-child(2n+1):nth-last-child(-n+2) ~ li {
      &::after {
        display: none;
      }
    }
  }
}
.footer {
  height: 312px;
  background-color: #000;
}
.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: 0.5s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
