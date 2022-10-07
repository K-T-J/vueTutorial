<template>
    <div class="inputFields">
        <input type="text" class="input__field input__title" data-set="title" spellcheck="false" placeholder=">제목을 입력하세요">
        <input type="text" class="input__field input__subtitle" data-set="subtitle" spellcheck="false" placeholder=">부제목을 입력하세요">
        <input type="text" class="input__field input__category" data-set="category" spellcheck="false" placeholder=">분류를 입력하세요">
    </div>
</template>

<script>
    export default{
        name : 'InputText'
    }

</script>