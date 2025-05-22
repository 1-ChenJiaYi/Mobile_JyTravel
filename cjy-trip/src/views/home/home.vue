<template>
  <div class="home" ref="homeRef">

    <div class="search-box" v-show="showSearchBox">
      <SearchBar />  
    </div>
    <navbar>
      <span>嘉一旅途</span>
    </navbar>
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="">
    </div>
    <search>
    </search> 
    <Category> </Category> 
    <house> </house>
  </div>
</template>



<script setup>
import house from "./cpns/house.vue";
import Category from "./cpns/category.vue";
import navbar from "./cpns/nav-bar.vue" // 插槽   
import search from "./cpns/search.vue";
import useHouseStore from "@/stores/modules/house";
const houseStore = useHouseStore()
import useScroll from "@/hooks/useScroll";
import { watch, ref, computed, onActivated } from "vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

const homeRef = ref() 
const {isReachBottom, scrollTop} = useScroll(homeRef) 
defineOptions({
  name: 'home'
})
watch(isReachBottom, (newV) => {
  if(newV) {
      houseStore.getHouseListData().then(() => {
      isReachBottom.value = false 
    }) 
  }
})

onActivated(() => {
  if(homeRef.value && scrollTop.value) {
    homeRef.value.scrollTo({ // 修正为scrollTo方法
      top: scrollTop.value,
    })
  }
})

const showSearchBox = computed(() => {
  return scrollTop.value >= 1000 
})

</script>

<style lang='less' scoped>
.home {
  box-sizing: border-box;
  // padding-bottom: 60px; 
  height: 100vh; 
  overflow-y: auto;
}
.banner {
  img {
    width: 100%; 
  }
}
</style>

