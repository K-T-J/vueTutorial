<template>
    <div id="capture" :ref="refPreView" class="preview" style="background: url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat rgb(120, 170, 249)">
        <ul :ref="refComponents" class="components" id="comp__opt1">
            <li :ref="refTitle" class="render title" style="color : rgb(255, 255, 255); font-size: 54px;">
                {{inputTitle}}
            </li>
            <li :ref="refSubTitle" class="render subtitle" style="color : rgb(255, 255, 255); border-top : 1px solid rgb(255, 255, 255); font-size: 24px; ">
                {{inputSubTitle}}
            </li>
            <li :ref="refCategory" class="render category" style="color : rgb(255, 255, 255); font-size: 24px;">
                {{inpuThirdTitle}}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name : 'MainContent',
    props : {
        inputTitle: {
            type:String,
            default:''
        },
        inputSubTitle:{
            type:String,
            default:''
        },
        inpuThirdTitle:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            refPreViewVal : null,
            refComponentsVal : null,
            refTitleVal : null,
            refSubTitleVal : null,
            refCategoryVal : null
        }
    },
    methods:{
        refPreView(e){
            this.refPreViewVal = e;
            this.$emit("mainPreVuewVal", this.refPreViewVal);
        },
        refComponents(e){
            this.refComponentsVal = e;
            this.$emit("mainComponentsVal", this.refComponentsVal);
        },
        refTitle(e){
            this.refTitleVal = e;
            this.$emit("mainTitleVal", this.refTitleVal);
        },
        refSubTitle(e){
            this.refSubTitleVal = e;
            this.$emit("mainSubTitleVal", this.refSubTitleVal);
        },
        refCategory(e){
            this.refCategoryVal = e;
            this.$emit("mainCategoryVal", this.refCategoryVal);
        }  
    },
    beforeUpdate(){
        this.refPreViewVal = null;
        // this.refComponentsVal = null;
        // this.refTitleVal = null;
        // this.refSubTitleVal = null;
        // this.refCategoryVal = null;
    }
}

</script>
<style>

</style>