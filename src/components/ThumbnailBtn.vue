<template>
  <div class="components__btns">
    <span class="components__txt">썸네일 구성 요소</span>
    <div :ref="refContainer" id="components__btn__container" class="btns">
        <button data-set="comp__opt1" class="btn component__opt" @click="totalTitleBtn">제목 / 부제목 / 분류</button>
        <button data-set="comp__opt2" class="btn component__opt" @click="totalTitleBtn">제목 / 분류</button>
        <button data-set="comp__opt3" class="btn component__opt" @click="totalTitleBtn">제목만</button>
    </div>
  </div>
</template>

<script>
export default{
  name : 'ThumbnailBtn',
  data(){
    return{
      componentsBtns : null,
      components : null
    }
  },
  props:{
    mainContentVal:{
      type : Object,
      default : () => {}
    }
  },
  methods:{
    refContainer(e){
      this.componentsBtns = e;
    },
    totalTitleBtn(e){
      
      this.components.id = e.target.dataset.set;
      
      for(let i = 0; i< this.componentsBtns.children.length; i++){
        this.componentsBtns.children[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    },
  },
  mounted(){
    this.components = this.$props.mainContentVal;
  },
  beforeUpdate(){
    this.componentsBtns = null;
  }
}

</script>
<style>

</style>