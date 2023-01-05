<template>
  <div class="inputFields">
    <input
      type="text"
      class="input__field input__title"
      @keyup="firstTitle"
      data-set="title"
      spellcheck="false"
      placeholder=">제목을 입력하세요"
      v-model="firstTitleInput"
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
      v-model="subTitleInput"
      @click="subTitleClick"
    />
    <input
      type="text"
      class="input__field input__category"
      @keyup="thirdTitle"
      data-set="category"
      spellcheck="false"
      v-model="categoryInput"
      placeholder=">분류를 입력하세요"
      @click="categoryClick"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    init: {
      type: Number,
      defualt: 0,
    },
  },
  data() {
    return {
      firstTitleSelect: true,
      firstTitleInput: "",
      subTitleInput: "",
      categoryInput: "",
    };
  },
  watch: {
    init() {
      this.firstTitleSelect = true;
      this.firstTitleInput = "";
      this.subTitleInput = "";
      this.categoryInput = "";
    },
  },
  methods: {
    firstTitle(e) {
      this.firstTitleInput = e.target.value;
      this.$emit("firstTitleValue", e.target.value);
    },
    subTitle(e) {
      this.subTitleInput = e.target.value;
      this.$emit("subTitleValue", e.target.value);
    },
    subTitleClick() {
      this.firstTitleSelect = false;
    },
    thirdTitle(e) {
      this.categoryInput = e.target.value;
      this.$emit("thirdTitleValue", e.target.value);
    },
    categoryClick() {
      this.firstTitleSelect = false;
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
