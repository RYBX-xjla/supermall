<template>
    <div class="back-top">
        <img src="@/assets/images/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name:'BackTop',
    
}
</script>

<style scoped>
    .back-top {
        position: fixed;
        z-index: 9999;
        bottom: 53px;
        right: 10px;
    }

    .back-top img {
        width:43px
    }
</style>