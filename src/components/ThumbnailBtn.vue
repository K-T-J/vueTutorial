<template>
  <div class="components__btns">
    <span class="components__txt">썸네일 구성 요소</span>
    <div id="components__btn__container" class="btns">
      <button
        data-set="comp__opt1"
        class="btn component__opt"
        :class="{
          selected: componentsOpt1,
        }"
        @click="totalTitleOpt1"
      >
        제목 / 부제목 / 분류
      </button>
      <button
        data-set="comp__opt2"
        class="btn component__opt"
        :class="{
          selected: componentsOpt2,
        }"
        @click="totalTitleOpt2"
      >
        제목 / 분류
      </button>
      <button
        data-set="comp__opt3"
        class="btn component__opt"
        :class="{
          selected: componentsOpt3,
        }"
        @click="totalTitleOpt3"
      >
        제목만
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThumbnailBtn",
  props: {
    init: {
      type: Number,
      defualt: 0,
    },
  },
  data() {
    return {
      componentsOpt1: true,
      componentsOpt2: false,
      componentsOpt3: false,
    };
  },
  watch: {
    init() {
      this.componentsOpt1 = true;
      this.componentsOpt2 = false;
      this.componentsOpt3 = false;
    },
  },
  methods: {
    totalTitleOpt1(e) {
      this.componentsOpt1 = true;
      this.componentsOpt2 = false;
      this.componentsOpt3 = false;
      this.$emit("totalTitleOpt1", e.target.dataset.set);
    },
    totalTitleOpt2(e) {
      this.componentsOpt1 = false;
      this.componentsOpt2 = true;
      this.componentsOpt3 = false;
      this.$emit("totalTitleOpt2", e.target.dataset.set);
    },
    totalTitleOpt3(e) {
      this.componentsOpt1 = false;
      this.componentsOpt2 = false;
      this.componentsOpt3 = true;
      this.$emit("totalTitleOpt3", e.target.dataset.set);
    },
  },
};
</script>
<style>
.selected {
  background-color: blue;
  color: white;
}
</style>
