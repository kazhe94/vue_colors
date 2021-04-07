<template>
  <the-header></the-header>
  <the-slider></the-slider>
  <div class="products">
    <div class="container">
      <app-filter></app-filter>
      <div class="products__wrap">
        <div class="products__props">
          <div class="products__count">412 товаров</div>
          <div class="products__sort">
            <select id="price">
              <option value="cheap">Сначала недорогие</option>
              <option value="expensive">Сначала дорогие</option>
              <option value="popular">Сначала популярные</option>
              <option value="new">Сначала новые</option>
            </select>
          </div>
        </div>
        <div class="products__grid">
          <app-product v-for="item in 15"></app-product>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer"></footer>
</template>

<script>
// @ is an alias to /src

import TheHeader from "@/components/Header/TheHeader";
import TheSlider from "@/components/Slider/TheSlider";
import AppProduct from "@/components/Products/AppProduct";
import AppFilter from "@/components/Products/AppFilter";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheSlider,
    AppProduct,
    AppFilter
  }
}
</script>
<style lang="scss">
.products {
  padding-top: 72px;
  padding-bottom: 140px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__wrap {
    width: 100%;
    margin-right: 0;
    margin-left: 138px;
  }
  &__props {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 278px);
    grid-column-gap: 24px;
    grid-row-gap: 33px;
  }
}
.footer {
  height: 312px;
  background-color: #000;
}
</style>
