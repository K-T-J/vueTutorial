<template>
  <div
    class="body"
    :style="{
      background: initUrl,
      color: backgroundColor,
    }"
  >
    <section class="wrapper">
      <article class="contents">
        <header>
          <h1># Thumbnail Maker</h1>
          <p>썸네일 메이커 v 1.2.1 - velog format</p>
          <div class="author">
            <a class="logo" href="https://naver.com" target="_blank">
              <img src="../assets/img/logo_thumbnail.jpg" />
              <span class="user">kimtaejun</span>
            </a>
          </div>
        </header>
        <MainContent
          :inputTitle="inputTitle"
          :inputSubTitle="inputSubTitle"
          :inpuThirdTitle="inpuThirdTitle"
          :randomGradientBtn="initUrl"
          :thumbnailDataSet="thumbnailDataSet"
          :textShadow="textShadow"
          :textInvert="textInvert"
          :textSize="textSize"
          :init="init"
        />
        <div class="control__panel">
          <InputText
            @firstTitleValue="firstTitleValue"
            @subTitleValue="subTitleValue"
            @thirdTitleValue="thirdTitleValue"
          />
          <BackgroundBtn
            @randomGradient="randomGradient"
            @randomSolid="randomSolid"
            @imgUrl="imgUrl"
          />
          <ThumbnailBtn
            @totalTitleOpt1="totalTitleOpt1"
            @totalTitleOpt2="totalTitleOpt2"
            @totalTitleOpt3="totalTitleOpt2"
          />
          <TextStyleBtn
            @textShadowBtn="textShadowBtn"
            @textInvertBtn="textInvertBtn"
            @textSizeBtn="textSizeBtn"
          />
          <MasterBtn @initBtn="initBtn" />
        </div>
      </article>
      <div class="copyright">
        <a href="https://devfolio.kr/project/24" target="_blank">
          <p class="me">ⓒ Wonkook Lee</p>
          <p class="unsplash">Images from Unsplash</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
//import HomeFooter from '../components/Footer.vue'
import MainContent from "../components/MainContent.vue";
import InputText from "../components/InputText.vue";
import BackgroundBtn from "../components/BackgroundBtn.vue";
import ThumbnailBtn from "../components/ThumbnailBtn.vue";
import TextStyleBtn from "../components/TextStyleBtn.vue";
import MasterBtn from "../components/MasterBtn.vue";
//import html2canvas from 'html2canvas';
export default {
  components: {
    //HomeFooter
    MainContent,
    InputText,
    BackgroundBtn,
    ThumbnailBtn,
    TextStyleBtn,
    MasterBtn,
  },
  data() {
    return {
      inputTitle: "제목을 입력하세요",
      inputSubTitle: "부제목을 입력하세요",
      inpuThirdTitle: "분류를 입력하세요",
      initUrl:
        "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat",
      backgroundColor: "78aaf9",
      thumbnailDataSet: "",
      textShadow: false,
      textInvert: false,
      textSize: false,
      init: 0,
    };
  },
  methods: {
    //InputText
    firstTitleValue(value) {
      this.inputTitle = value;
    },
    subTitleValue(value) {
      this.inputSubTitle = value;
    },
    thirdTitleValue(value) {
      this.inpuThirdTitle = value;
    },
    //BackgroundBtn
    randomGradient() {
      const rgb1 = this.randomRGB();
      const rgb2 = this.randomRGB();
      this.initUrl =
        "linear-gradient(to bottom," + "#" + rgb1 + "," + "#" + rgb2 + ")"; // linear-gradient: 두 개 이상의 색상 간의 점진적 전환으로 구성된 이미지를 만듬
    },
    randomSolid() {
      const rgb = this.randomRGB();
      this.initUrl = "#" + rgb;
    },
    imgUrl(url) {
      this.initUrl = "url(" + url + ") center center / cover no-repeat";
    },
    randomRGB() {
      let rgb = "";
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      return rgb;
    },
    //ThumbnailBtn
    totalTitleOpt1(value) {
      this.thumbnailDataSet = value;
    },
    totalTitleOpt2(value) {
      this.thumbnailDataSet = value;
    },
    totalTitleOpt3(value) {
      this.thumbnailDataSet = value;
    },
    textShadowBtn() {
      this.textShadow = !this.textShadow;
    },
    textInvertBtn() {
      this.textInvert = !this.textInvert;
    },
    textSizeBtn() {
      this.textSize = !this.textSize;
    },
    initBtn() {
      this.init = ++this.init;
      this.initUrl =
        "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat";
      this.backgroundColor = "#78aaf9";
    },
  },
};
</script>

<style>
@import "../assets/css/projectStyle.css";
</style>
