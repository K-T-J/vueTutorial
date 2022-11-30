<template>
  <div class="background__btns">
    <span class="background__txt">배경을 정해주세요</span>
    <div id="background__btn__container" class="btns">
      <button
        class="btn random__gradient"
        :class="{ selected: randomGradientBtn }"
        @click="randomGradient"
      >
        랜덤 그라디언트
      </button>
      <button
        class="btn random__solid"
        :class="{ selected: randomSolidBtn }"
        @click="randomSolid"
      >
        랜덤 단색
      </button>
      <button
        :class="{ selected: imgUrlBtn }"
        class="btn img__url"
        @click="imgUrl"
      >
        이미지 URL
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundBtn",
  data() {
    return {
      randomGradientBtn: false,
      randomSolidBtn: null,
      imgUrlBtn: null,
    };
  },
  methods: {
    randomGradient() {
      this.randomGradientBtn = true;
      this.randomSolidBtn = false;
      this.imgUrlBtn = false;

      this.$emit("randomGradient");
    },
    randomSolid() {
      this.randomSolidBtn = true;
      this.randomGradientBtn = false;
      this.imgUrlBtn = false;
      this.$emit("randomSolid");
    },
    imgUrl() {
      this.imgUrlBtn = true;
      this.randomGradientBtn = false;
      this.randomSolidBtn = false;

      const regex =
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\\+\\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\\+\\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
      let imgUrl = prompt("이미지 주소를 입력하세요 😇");
      if (imgUrl == null) return; //취소 눌렀을 때 알림이 발생하지 않도록 수정
      if (!imgUrl.match(regex)) {
        //match : 문자열이 정규식과 매치되는 부분을 검색
        alert("올바르지 않은 URL입니다 😨");
        return;
      }
      this.$emit("imgUrl", imgUrl);
    },
  },
};
</script>
<style scoped>
.selected {
  background-color: blue;
  color: white;
}
</style>
