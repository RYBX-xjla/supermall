<template>
    <div class="maintabbar">
        <tabbar>
            <tabbaritem path="/home">
                <img slot="item-icon" src="@/assets/images/tabbar/home.svg">
                <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg">
                <div slot="item-text">首页</div>
            </tabbaritem>
            <tabbaritem path="/category">
                <img slot="item-icon" src="@/assets/images/tabbar/category.svg">
                <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg">
                <div slot="item-text">品类</div>
            </tabbaritem>
            <tabbaritem path="/cart">
                <img slot="item-icon" src="@/assets/images/tabbar/shopcart.svg">
                <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg">
                <div slot="item-text">购物车</div>
            </tabbaritem>
            <tabbaritem path="/me">
                <img slot="item-icon" src="@/assets/images/tabbar/profile.svg">
                <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg">
                <div slot="item-text">我的</div>
            </tabbaritem>
        </tabbar>
    </div>
</template>

<script>
import tabbar from '@/components/common/tabbar/TabBar.vue'
import tabbaritem from '@/components/common/tabbar/TabBarItem.vue'

export default {
    name:'maintabbar',
    components: {
        tabbar,
        tabbaritem
    }
}
</script>

<style>
    .maintabbar {
        position: relative;
        z-index: 999;
    }
</style>