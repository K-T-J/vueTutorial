<template>
  <div class="background__btns">
      <span class="background__txt">배경을 정해주세요</span>
      <div :ref="regTest" id="background__btn__container" class="btns">
          <button class="btn random__gradient" @click="randomTest">랜덤 그라디언트</button>
          <button class="btn random__solid">랜덤 단색</button>
          <button class="btn img__url">이미지 URL</button>
      </div>
  </div>
</template>

<script>
  export default{
      name : 'BackgroundBtn',
      data(){
        return{
          randomGradientBtn : [],
        }
      },
      methods : {
        regTest(el)  {
          console.log("el > " , el.children)
          
          const regs = JSON.parse(JSON.stringify(el.children))
          console.log(regs)
          // const regKeys = Object.keys(regs);
          // regKeys.forEach(key=>{
          //   this.randomGradientBtn.push(regs[key]);
          // })

        },
        randomRGB(){
          let rgb = '';
          rgb += (Math.floor(Math.random() * 90 + 1) + 150)
            .toString(16)
            .padStart(2, '0');
          rgb += (Math.floor(Math.random() * 90 + 1) + 150)
            .toString(16)
            .padStart(2, '0');
          rgb += (Math.floor(Math.random() * 90 + 1) + 150)
            .toString(16)
            .padStart(2, '0');
          return rgb;
        },
        randomTest() {
          const rgb = this.randomRGB();
          console.log(rgb);

          this.randomGradientBtn.forEach((element) => {
            console.log(element)
          });

        },

        
      },
      beforeUpdate(){
        this.randomGradientBtn = []; //초기화
      }
  }

</script>