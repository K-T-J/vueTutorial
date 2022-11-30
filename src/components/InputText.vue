<template>
  <div class="inputFields">
    <input
      type="text"
      class="input__field input__title"
      @keyup="firstTitle"
      data-set="title"
      spellcheck="false"
      placeholder=">제목을 입력하세요"
      :class="{
        selected: firstTitleSelect,
      }"
    />
    <input
      type="text"
      class="input__field input__subtitle"
      @keyup="subTitle"
      data-set="subtitle"
      spellcheck="false"
      placeholder=">부제목을 입력하세요"
      @click="subTitleClick"
    />
    <input
      type="text"
      class="input__field input__category"
      @keyup="thirdTitle"
      data-set="category"
      spellcheck="false"
      placeholder=">분류를 입력하세요"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  data() {
    return {
      firstTitleSelect: true,
      subTitleBtn: false,
      thirdTitleBtn: false,
    };
  },
  methods: {
    firstTitle(e) {
      this.$emit("firstTitleValue", e.target.value);
    },
    subTitle(e) {
      this.$emit("subTitleValue", e.target.value);
    },
    subTitleClick() {
      this.firstTitleSelect = false;
    },
    thirdTitle(e) {
      this.$emit("thirdTitleValue", e.target.value);
    },
  },
};
</script>
<style scoped>
.selected {
  background-color: rgb(59, 69, 255);
  color: #a9adfdc0;
}
</style>
