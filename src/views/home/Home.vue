<template>
    <div id="home">
        <nav-bar class="home-nav-color">
            <div slot="center">购物街</div>
        </nav-bar>

        <scroll class="content" ref="scroll" 
                :probe-type="3" 
                @scroll="contentscroll" 
                :pull-up-load="true" 
                @pullingUp="loadMore">
            <swiper>
                <swiper-item v-for="(item, index) in banners" :key="index">
                    <a href="#">
                        <!-- <img src="@/assets/images/axios-test/test.jpg" alt=""> -->
                        <img :src="item.image" alt="">
                    </a>
                </swiper-item>
            </swiper>
            <recommend-view :recommends="recommends"/>
            <feature/>
            <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick" />
            <goods-list :goods="goods[currentType].list" />
        </scroll>

        <back-top @click.native="backTop" v-show="isShow"/>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { Swiper, SwiperItem } from '@/components/common/swiper'
import RecommendView from './childComps/YSRecommendView'
import Feature from './childComps/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import { getHomeData, getHomeGoods } from '@/network/home.js'

export default {
    name:'home',
    components: {
        NavBar,
        Swiper,SwiperItem,
        RecommendView,
        Feature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners: null,
            recommends: null,
            goods: {
                pop: {
                    page: 0,
                    list:[]
                },
                new: {
                    page: 0,
                    list:[]
                },
                sell: {
                    page: 0,
                    list:[]
                },
            },
            currentType: "pop",
            isShow: false,
            saveY: 0
        }
    },
    created() {
        this.getHomeData()

        this.getHomeGoods("pop")
        this.getHomeGoods("new")
        this.getHomeGoods("sell")
    },
    mounted() {
        // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 200)
        // console.log(this.$refs.scroll.scroll);
        
        this.$bus.$on("itemImageLoad", () => {
            // refresh()
                this.$refs.scroll.scroll.refresh()
        })
    },
    methods: {
        // debounce(func, delay) {
        //     let timer = null
        //     return function(...args) {
        //         if (timer) clearTimeout(timer)
        //         timer = setTimeout(() => {
        //             func.apply(this, args)
        //         }, delay)
        //     }
        // },

        getHomeData() {
            getHomeData()
            .then(res => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
            .catch(err => {
                console.log(err);
            })
        },

        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page)
            .then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page = page
            })  

            if(this.$refs.scroll) {
                this.$refs.scroll.scroll.finishPullUp()
            }
        },

        tabClick(index) {
            switch (index) {
                case 0: 
                    this.currentType = "pop"
                    break
                case 1:
                    this.currentType = "new"
                    break
                case 2: 
                    this.currentType = "sell"
                    break        
            }
        },

        backTop() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 2000)
        },

        contentscroll(position) {
            // console.log(position);
            this.isShow = (position.y) < -1000
        },

        loadMore() {
            // console.log("上拉加载更多");
            this.getHomeGoods(this.currentType)
        }
    },
    activated() {
        // console.log("活跃");
        this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
        
    },
    deactivated() {
        // console.log("不活跃");
        this.saveY = this.$refs.scroll.scroll.y
    }
}

</script>

<style scoped>
    #home {
        /* padding-top: 44px; */

        /* vh: viewport height： 视口宽度   页面的可见区域即为视口*/
        height: 100vh;   /*设置父容器高度为一个可见区域的高度*/

        position: relative;
    }

    .home-nav-color{
        background-color: var(--color-tint);
        color: white;

        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    /* 给scroll定外层容器宽高（滚动区域）  方式1*/
    /* .content {
        margin-top: 44px;
        overflow: hidden;
        height: calc(100% - 93px);
    } */

    /* 方式2   管道最有有错误 */
    .content{
        overflow: hidden;
        position: absolute;

        bottom: 49px;
        top: 44px;
        left: 0;
        right: 0;
    }
</style>