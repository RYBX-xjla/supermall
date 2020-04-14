<template>
    <div class="bscroll" ref="aaa">
        <ul class="content">
            <h1>品类</h1>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:"Category",
    data() {
        return {
            scroll: null
        }
    },
    created() {
        //创建后还未挂载，不能获取dom（元素）
        // console.log(this.$refs.aaa);                        //undefine
        // console.log(document.querySelector('.bscroll'));    //null
    },
    mounted() {
        this.scroll = new BScroll(document.querySelector('.bscroll'), {
            probeType: 3,
            pullUpLoad: true
        })

        this.scroll.on('scroll', (position) => {
        })

        this.scroll.on('pullingUp', () => {
            console.log("上拉加载更多");
        })
    },
}
</script>

<style scoped>
    .bscroll{
        height: 150px;
        background-color: red;

        overflow: hidden;
    }
</style>