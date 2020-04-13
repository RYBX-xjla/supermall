<template>
    <div id="home">
        <nav-bar class="home-nav-color">
            <div slot="center">购物街</div>
        </nav-bar>
        <swiper>
            <swiper-item v-for="(item, index) in banners" :key="index">
                <a href="#">
                    <!-- <img src="@/assets/images/axios-test/test.jpg" alt=""> -->
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
        <recommend-view :recommends="recommends"/>
        <h1>主页</h1>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { Swiper, SwiperItem } from '@/components/common/swiper'
import RecommendView from './childComps/YSRecommendView'

import { getHomeData } from '@/network/home.js'
export default {
    name:'home',
    components: {
        NavBar,
        Swiper,SwiperItem,
        RecommendView
    },
    data() {
        return {
            banners: null,
            recommends: null
        }
    },
    created() {
        getHomeData().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            console.log(this.banners, this.recommends);
            
        }).catch(err => {
            console.log(err);
        })
    }
}

</script>

<style scoped>
    .home-nav-color{
        background-color: var(--color-tint);
        color: white;;
    }
</style>