<template>
  <the-header @openCart="cart = true"></the-header>
  <the-slider></the-slider>
  <div class="container">
    <div class="page-title">Краски</div>
  </div>
  <div class="products">
    <div class="container">
      <app-filter
          :filterOpened="filterOpened"
          v-model="filter"
      ></app-filter>
      <div class="products__wrap">
        <div class="products__props">
          <div class="products__count">{{ products.length }} товаров</div>
          <a href="#" class="products__filter" @click.prevent="filterOpened = true">Фильтры</a>
          <div class="products__sort">
            <app-sort
                :options="options"
                v-model="sort"
                :optionOpened="optionOpened"
                @closeSort="optionOpened = false"
            ></app-sort>
          </div>
        </div>
        <ul class="products__grid">
          <app-product
              v-for="item in products"
              :key="item.id"
              :product="item"
          ></app-product>
        </ul>
      </div>
    </div>
  </div>
  <teleport to="body">
    <app-backdrop v-if="filterOpened || cart" @close="filterOpened = false"></app-backdrop>
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
import {computed, ref, watch} from "vue";
import TheCart from "@/components/Cart/TheCart";
import AppSort from "@/components/Products/AppSort";
import {useStore} from "vuex";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheSlider,
    AppProduct,
    AppFilter,
    AppBackdrop,
    TheCart,
    AppSort
  },
  setup() {
    const store = useStore()
    const filterOpened = ref(false)
    const optionOpened = ref(false)
    const cart = ref(false)
    const filter = ref({
      news: false,
      inStock: false,
      contract: false,
      exclusive: false,
      sale: false
    })
    const sort = ref({
      text: 'Сначала дорогие',
      value: 'expensive'
    })
    const options = [
      {text: 'Сначала недорогие', value: 'cheap'},
      {text: 'Сначала дорогие', value: 'expensive'},
      {text: 'Сначала популярные', value: 'popular'},
      {text: 'Сначала новые', value: 'new'},
    ]
    const products = computed(() => store.getters['products/products'])
    console.log(products.value)
    return {
      filterOpened,
      cart,
      options,
      sort,
      filter,
      optionOpened,
      products
    }
  }
}
</script>
<style lang="scss">
.page-title {
  display: none;
  margin: 48px 0;
  font-size: 36px;
  @media (max-width: 840px) {
    display: block;
  }
}
.products {
  padding-top: 72px;
  padding-bottom: 140px;
  @media (max-width: 840px) {
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
    @media (max-width: 1225px) {
      margin-left: 50px;
    }
    @media (max-width: 840px) {
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
    @media (max-width: 840px) {
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
    @media (max-width: 840px) {
      display: block;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 278px);
    grid-column-gap: 24px;
    justify-content: center;
    grid-row-gap: 33px;
    @media (max-width: 1225px) {
      grid-column-gap: 15px;
      grid-row-gap: 24px;
      grid-template-columns: repeat(auto-fit, 156px);
    }
  }
  @media (min-width: 1830px) {
    li:nth-child(5n+1):nth-last-child(-n+5),
    li:nth-child(5n+1):nth-last-child(-n+5) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (min-width: 1226px) {
    li:nth-child(3n+1):nth-last-child(-n+3),
    li:nth-child(3n+1):nth-last-child(-n+3) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (min-width: 1095px) and (max-width: 1226px) {
    li:nth-child(5n+1):nth-last-child(-n+5),
    li:nth-child(5n+1):nth-last-child(-n+5) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (min-width: 538px) and (max-width: 1095px){
    li:nth-child(3n+1):nth-last-child(-n+3),
    li:nth-child(3n+1):nth-last-child(-n+3) ~ li {
      &::after {
        display: none;
      }
    }
  }
  @media (min-width: 367px) {
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
