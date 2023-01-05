<template>
  <div
    id="capture"
    class="preview"
    :style="{
      background: mainInit,
      textShadow: textShadowValue,
      color: colorInit,
    }"
  >
    <ul class="components" :id="componentsId">
      <li
        class="render title"
        style="color: rgb(255, 255, 255); font-size: 54px"
        :style="{
          color: renderTxt,
          fontSize: titleFontSize,
        }"
      >
        {{ inputTitle }}
      </li>
      <li
        class="render subtitle"
        style="
          color: rgb(255, 255, 255);
          border-top: 1px solid rgb(255, 255, 255);
          font-size: 24px;
        "
        :style="{
          color: renderTxt,
          borderTop: prevSubtitle,
          fontSize: subtitleFontSize,
        }"
      >
        {{ inputSubTitle }}
      </li>
      <li
        class="render category"
        style="color: rgb(255, 255, 255); font-size: 24px"
        :style="{
          color: renderTxt,
          fontSize: categoryFontSize,
        }"
      >
        {{ inpuThirdTitle }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    randomGradientBtn: {
      type: String,
      default: "",
    },
    inputTitle: {
      type: String,
      default: "",
    },
    inputSubTitle: {
      type: String,
      default: "",
    },
    inpuThirdTitle: {
      type: String,
      default: "",
    },
    thumbnailDataSet: {
      type: String,
      default: "",
    },
    textShadow: {
      type: Boolean,
      default: false,
    },
    textInvert: {
      type: Boolean,
      default: false,
    },
    textSize: {
      type: Boolean,
      default: false,
    },
    init: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mainInit:
        "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat",
      colorInit: "#78aaf9",
      componentsId: "comp__opt1",
      textShadowValue: "",
      prevSubtitle: "",
      renderTxt: "#ffffff",
      titleFontSize: "54px",
      subtitleFontSize: "24px",
      categoryFontSize: "24px",
    };
  },
  watch: {
    randomGradientBtn() {
      this.mainInit = this.randomGradientBtn;
    },
    thumbnailDataSet() {
      this.componentsId = this.thumbnailDataSet;
    },
    textShadow() {
      this.textShadowValue = this.textShadow
        ? "2px 2px 4px rgba(0,0,0,0.4)"
        : "";
    },
    textInvert() {
      if (this.textInvert) {
        this.renderTxt = "black";
        this.prevSubtitle = "1px solid #000000";
      } else {
        this.renderTxt = "#ffffff";
        this.prevSubtitle = "1px solid #ffffff";
      }
    },
    textSize() {
      if (this.textSize) {
        this.titleFontSize = "46px";
        this.subtitleFontSize = "22px";
        this.categoryFontSize = "22px";
      } else {
        this.titleFontSize = "54px";
        this.subtitleFontSize = "24px";
        this.categoryFontSize = "24px";
      }
    },
    init() {
      this.mainInit =
        "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat";
      this.colorInit = "#78aaf9";
      this.textShadowValue = "";
      this.renderTxt = "#ffffff";
      this.prevSubtitle = "1px solid #ffffff";
      this.titleFontSize = "54px";
      this.subtitleFontSize = "24px";
      this.categoryFontSize = "24px";
      this.componentsId = "comp__opt1";
    },
  },
  methods: {},
};
</script>
<style></style>
