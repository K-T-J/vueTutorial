<template>
    <div id="capture" class="preview">
        <ul class="components" id="comp__opt1">
            <li class="render title" style="color : rgb(255, 255, 255); font-size: 54px;">
                {{inputTitle}}
            </li>
            <li class="render subtitle" style="color : rgb(255, 255, 255); border-top : 1px solid rgb(255, 255, 255); font-size: 24px; ">
                {{inputSubTitle}}
            </li>
            <li class="render category" style="color : rgb(255, 255, 255); font-size: 24px;">
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
            
        }
    }
    
}

</script>
<style>

</style>