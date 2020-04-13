<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
            <a href="#">
                <img :src="item.image">
                {{item.title}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props: {
        recommends: {
            type: Array,
            default()  {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 14px;

        padding: 15px 0 25px;
        border-bottom: 10px solid #eee;
    }

    .recommend-item{
        flex: 1;
    }

    .recommend-item img{
        width: 70px;
        border-radius: 35px;
        margin-bottom: 10px;
    }
</style>