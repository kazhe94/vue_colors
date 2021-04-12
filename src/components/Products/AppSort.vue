<template>
  <div class="select">
    <p
        @click="$emit('watchOptions')"
    >
      {{ modelValue.text }}
      <span>&#9660;</span>
    </p>
    <div class="options" v-if="optionOpened">
      <div class="option"
           v-for="option in options"
           :key="option.value"
           @click="selectOption(option)"
      >
        {{option.text}}
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AppSort",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    modelValue: Object,
    optionOpened: Boolean
  },
  emits: ['update:modelValue', 'closeSort', 'watchOptions'],
  setup(_, {emit}) {
    const selected = ref()
    const selectOption = (option) => {
      emit('update:modelValue', option)
      emit('closeSort')
    }
    return {
      selectOption,
    }
  }
}
</script>

<style lang="scss">
  .select {
    position: relative;
    p {
      cursor: pointer;
    }
  }
  .options {
    position: absolute;
    z-index: 11;
    right: 0;
    top: 0;
    background-color: #fff;
  }
  .option {
    padding: 16px 24px;
    width: 280px;
    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
  }
</style>