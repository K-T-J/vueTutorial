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
                <MainContent/>

                <div class="control__panel">
                    <InputText/>
                    <BackgroundBtn/>
                    <ThumbnailBtn/>
                    
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
import MainContent from '../components/MainContent.vue'
import InputText from '../components/InputText.vue'
import BackgroundBtn from '../components/BackgroundBtn.vue'
import ThumbnailBtn from '../components/ThumbnailBtn.vue'
export default{
    components : {
        //HomeFooter
        MainContent,
        InputText,
        BackgroundBtn,
        ThumbnailBtn
    }

}
</script>

<style>
    @import "../assets/css/projectStyle.css"; 


</style>