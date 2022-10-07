<template>
    <div>
        <section class="wrapper">
            <article class="contents">
                <header>
                    <h1># Thumbnail Maker</h1>
                    <p>썸네일 메이커 v 1.2.1 - velog format</p>
                    <div class="author">
                        <a class="logo" href="https://naver.com" target="_blank">
                            <img src="../assets/img/logo_thumbnail.jpg"/>
                            <span class="user">kimtaejun</span>
                        </a>
                    </div>
                </header>
                <div id="capture" class="preview">
                    <ul class="components" id="comp__opt1">
                        <li class="render title" style="color : rgb(255, 255, 255); font-size: 54px;">
                            제목을 입력하세요
                        </li>
                        <li class="render subtitle" style="color : rgb(255, 255, 255); border-top : 1px solid rgb(255, 255, 255); font-size: 24px; ">
                            부제목을 입력하세요
                        </li>
                        <li class="render category" style="color : rgb(255, 255, 255); font-size: 24px;">
                            분류를 입력하세요
                        </li>
                    </ul>
                </div>
                <div class="control__panel">
                    <div class="inputFields">
                        <input type="text" class="input__field input__title" data-set="title" spellcheck="false" placeholder=">제목을 입력하세요">
                        <input type="text" class="input__field input__subtitle" data-set="subtitle" spellcheck="false" placeholder=">부제목을 입력하세요">
                        <input type="text" class="input__field input__category" data-set="category" spellcheck="false" placeholder=">분류를 입력하세요">
                    </div>
                    <div class="background__btns">
                        <span class="background__txt">배경을 정해주세요</span>
                        <div id="background__btn__container" class="btns">
                            <button class="btn random__gradient">랜덤 그라디언트</button>
                            <button class="btn random__solid">랜덤 단색</button>
                            <button class="btn img__url">이미지 URL</button>
                        </div>
                    </div>
                    <div class="components__btns">
                        <span class="components+__txt">썸네일 구성 요소</span>
                        <div id="components__btn__container" class="btns">
                            <button data-set="comp__opt1" class="btn component__opt ">제목 / 부제목 / 분류</button>
                            <button data-set="comp__opt2" class="btn component__opt">제목 / 분류</button>
                            <button data-set="comp__opt3" class="btn component__opt">제목만</button>
                        </div>
                    </div>
                    <div class="text__style">
                        <span class="textstyle__txt">텍스트 스타일 변경</span>
                        <div id="textstyle__btn__container" class="btns">
                            <button class="btn text__btn text__shadow">텍스트 그림자</button>
                            <button class="btn text__btn text__invert">텍스트 색상 반전</button>
                            <button class="btn text__btn text__size">제목 크기 작게</button>
                        </div>
                    </div>
                    <div class="master__panel">
                        <button class="btn" id="initialize">초기화</button>
                        <button class="btn" id="export">완료 및 이미지화</button>
                    </div>
                </div>
            </article>
            <div class="copyright">
                <a href="https://naver.com" target="_blank">
                    <p class="me">ⓒ Wonkook Lee</p>
                    <p class="unsplash">Images from Unsplash</p>
                </a>
            </div>
        </section>
    </div>
</template> 

<script>
//import HomeFooter from '../components/Footer.vue'
export default{
    components : {
        //HomeFooter
    }

}
</script>

<style>
   /* @import "../assets/css/style.css"; */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    position: relative;
    /* background-color: #f4f4f4; */
    background-color: cyan;
    height: 100vh;
    min-height: 1220px;
    font-family: 'Noto Sans KR', sans-serif ;
 }
section.wrapper{
    margin: 0 auto;
    width: 1024px;
    height: 1150px;
    background-color: #fff;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
}
article.contents{
    position: relative;
    margin: 0 auto;
    width: 768px;
}
.copyright{
    position: relative;
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    top: -77px;
}
header{
    padding-top: 64px;
    margin-bottom: 35px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    position: relative;
}
header h1{
    font-size: 54px;
    color : #343a40;
}
header p{
    font-size: 16px;
    color : #868e96;
}
header .author{
    position: relative;
    margin-top: 58px;
    height: 48px;
}
a, a:active{
    text-decoration: none;
    color: #000;
}
header .author img{
    height: 48px;
    border-radius: 50%;
}
header .author .user{
    position: absolute;
    top: 50%;
    left: 65px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
}
.preview{
    margin: 0 auto;
    height: 402px;
    width: 768px;
    overflow: hidden; /*넘치는 부분은 잘려서 보여지지 않는다*/
    background-color: aquamarine;/*임시*/
}
#comp__opt1{
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
}
ul{
    list-style: none;
}
#comp__opt1 .title{
    position: relative;
    display: block;
    top: 140px;
    font-weight: 500;
}
#comp__opt1 .subtitle{
    position: relative;
    display: inline-block;
    top: 150px;
    padding-top: 5px;
}
#comp__opt1 .category{
    position: relative;
    top: 220px;
}
.control__panel{
    margin: 35px 0 100px 0;
    padding-bottom: 50px;
}
.inputFields::after{ /* clear 나중에 float배우고 찾아보기 */
    clear: both;
    content: '';
    display: table;
}
/*input */

/*float : 웹페이지에서 이미지를 어떻게 띄워서 텍스트와 함께 배치할 것인가에 대한 속성 
float:none      :요소를 부유시키지 않음
float:inherit   :부모요소에서 상속
float:left      :왼쪽에 부유하는 블록 박스를 생성 페이지 내용은 박스 오른쪽에 위치하며 위에서 아래로 흐름.
float:right     :오른쪽에 부유하는 블록 박스를 생성. 페이지 내용은 박스 왼쪽에 위치하며 위에서 아래로 흐름. 
                이후 요소에 clear 속성이 있으면 페이지 흐름이 달라짐. none 이 아니라면 display 속성은 무시된다.
*/
input.input__field{
    width: 248px;
    height: 40px;
    float: left; 
    margin-right: 12px;
    border: 1px solid #cacaca;
    border-radius: 14px; /*테두리를 둥굴게 만드는 속성 */
    color: #555;
    font-size: 16px;
    font-weight: 400;
    padding-left: 14px;

}
.input__field:last-child{
    margin-right: 0;
}
.background__btns, .components__btns, .text__style{
    height: 70px;
    line-height: 68px; /*줄높이를  정하는 속성 */
    border-bottom: 1px solid #cacaca;
}
.background__btns{
    margin-top: 20px;
    border-top: 1px solid #cacaca;
}
.background__txt, .components__txt, .textstyle__txt{
    color: #666666;
    font-weight: 500;
}
.btns{
    float: right;
}
.btn{
    width: 192px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: #f4f4f4;
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer; /* 마우스 커서가 올라갔을 때 보여줄 모양을 지정 손가락 모양 (클릭 가능한 버튼) */
    transition: background-color 0.2s ease, color 0.2s ease, opacity 0.4s ease, transform 0.4s ease;
}
.selected{
    background-color: #3b45ff;
    color: #fff;
}
.master__panel{
    margin-top: 50px;
    text-align: center;
}
.master__panel .btn{
    border-radius: 0;
    margin-right: 10px;
}
.master__panel .btn:last-child{
    margin-right: 0;
    background-color: #888;
    color: #fff;
}
.me{
    color: #fff;
    display: inline-block;
}
.unsplash{
    color: #ffffff;
    font-weight: 300;
    font-size: 12px;
}
</style>