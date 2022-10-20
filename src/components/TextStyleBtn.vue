<template>
  <div class="text__style">
      <span class="textstyle__txt">텍스트 스타일 변경</span>
      <div id="textstyle__btn__container" :ref="refTextStyleBtns" class="btns">
          <button class="btn text__btn text__shadow" @click="textShadowBtn">텍스트 그림자</button>
          <button class="btn text__btn text__invert" @click="textInvertBtn">텍스트 색상 반전</button>
          <button class="btn text__btn text__size" @click="textSizeBtn">제목 크기 작게</button>
      </div>
  </div>
</template>

<script>
export default{
  name : 'TextStyleBtn',
  data(){
    return{
      textStyleBtns : null,
      renderTxt : null,
      prevTitle : null,
      prevSubtitle : null,
      prevCategory : null,
    }
  },
  props : {
    mainContentVal:{
      type : Object,
      defualt : () => {}
    },
    title:{
      type : Object,
      defualt : () => {}
    },
    subTitle:{
      type : Object,
      defualt : () => {}
    },
    category:{
      type : Object,
      defualt : () => {}      
    }
  },
  methods:{
    refTextStyleBtns(el){      
      this.textStyleBtns = el.children; 

    },
    textShadowBtn(e){
      e.target.classList.toggle("selected"); // .toggle()은 선택한 요소가 보이면 보이지 않게, 보이지 않으면 보이게 한다
      for(let i = 0; i < this.renderTxt.children.length; i++){
        if(e.target.classList.contains("selected")){//contains() : 텍스트 검색
          this.renderTxt.children[i].style.textShadow = "2px 2px 4px rgba(0,0,0,2)";
        }else{
          this.renderTxt.children[i].style.textShadow = "";
        }
      }
    },
    textInvertBtn(e){
      e.target.classList.toggle('selected');
      
      for(let i = 0; i < this.renderTxt.children.length; i++){
        if(e.target.classList.contains("selected")){//contains() : 텍스트 검색
          this.renderTxt.children[i].style.color = 'black';
          this.prevSubtitle.style.borderTop = '1px solid #000000';
        }else{
          this.renderTxt.children[i].style.color = '#ffffff';
          this.prevSubtitle.style.borderTop = '1px solid #ffffff';
        }
      }
    },
    textSizeBtn(e){
      e.target.classList.toggle('selected');
      for(let i = 0; i < this.renderTxt.children.length; i++){
        if(e.target.classList.contains("selected")){//contains() : 텍스트 검색
          this.prevTitle.style.fontSize = '46px';
          this.prevSubtitle.style.fontSize = '22px';
          this.prevCategory.style.fontSize = '22px';
        }else{
          this.prevTitle.style.fontSize = '54px';
          this.prevSubtitle.style.fontSize = '24px';
          this.prevCategory.style.fontSize = '24px';
        }
      }
    }
  },
  mounted(){
    this.renderTxt = this.$props.mainContentVal;
    this.prevTitle = this.$props.title;
    this.prevSubtitle = this.$props.subTitle;
    this.prevCategory = this.$props.category;
  },
  beforeUpdate(){
    this.textStyleBtns = null;
  }
}
</script>
<style>

</style>