<template>
  <div class="text__style">
    <span class="textstyle__txt">텍스트 스타일 변경</span>
    <div id="textstyle__btn__container" class="btns">
      <button
        class="btn text__btn text__shadow"
        :class="{ selected: textShadowSelect }"
        @click="textShadowBtn"
      >
        텍스트 그림자
      </button>
      <button
        class="btn text__btn text__invert"
        :class="{ selected: textInvertSelect }"
        @click="textInvertBtn"
      >
        텍스트 색상 반전
      </button>
      <button
        class="btn text__btn text__size"
        :class="{ selected: textSizeSelect }"
        @click="textSizeBtn"
      >
        제목 크기 작게
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextStyleBtn",
  props: {
    init: {
      type: Number,
      defualt: 0,
    },
  },
  data() {
    return {
      textShadowSelect: false,
      textInvertSelect: false,
      textSizeSelect: false,
    };
  },
  watch: {
    init() {
      this.textShadowSelect = false;
      this.textInvertSelect = false;
      this.textSizeSelect = false;
    },
  },
  methods: {
    textShadowBtn() {
      this.textShadowSelect = !this.textShadowSelect;
      this.$emit("textShadowBtn");
    },
    textInvertBtn() {
      this.textInvertSelect = !this.textInvertSelect;
      this.$emit("textInvertBtn");
    },
    textSizeBtn() {
      this.textSizeSelect = !this.textSizeSelect;
      this.$emit("textSizeBtn");
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
