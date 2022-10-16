<template>
  <div class="text__style">
      <span class="textstyle__txt">텍스트 스타일 변경</span>
      <div id="textstyle__btn__container" :ref="refTextStyleBtns" class="btns">
          <button class="btn text__btn text__shadow" @click="textShadowBtn">텍스트 그림자</button>
          <button class="btn text__btn text__invert">텍스트 색상 반전</button>
          <button class="btn text__btn text__size">제목 크기 작게</button>
      </div>
  </div>
</template>

<script>
export default{
  name : 'TextStyleBtn',
  data(){
    return{
      textStyleBtns : null,

    }
  },
  methods:{
    refTextStyleBtns(el){      
      this.textStyleBtns = el.children; 
    },
    textShadowBtn(e){
      e.target.classList.toggle('selected');
      // console.log(e.target);
      // for(let i=0; i < this.textStyleBtns.length; i++){
      //   e.target.classList.toggle('selected');
      // }



      if(e.target.classList.contains('selected')){//contains() : 텍스트 검색

      }
    }
  }
}
</script>
<style>

</style>