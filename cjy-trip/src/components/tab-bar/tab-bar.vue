<template>
  <div class="tab-bar">

  <van-tabbar :v-model="curidx" 
  active-color="#ff9854"
  :fixed="false"
  route>
    <template 
    v-for="(item, idx) in tabbarData">

      <van-tabbar-item  
        :to="item.path">

        <template #icon>
          <img v-if="curidx !== idx"
          :src="getAssetURL(item.image)" alt="">
          <img v-else
          :src="getAssetURL(item.imageActive)" alt="">
        </template>

        <span>{{ item.text }}</span>
      
      </van-tabbar-item>
        
    </template>
  </van-tabbar>


  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js' 
// import {getAssetURL} from '@/utils/get_img.js' 
import {createRouterMatcher, useRoute} from 'vue-router' 
import {ref, watch} from "vue" 
const curidx = ref(0) 
const router = useRoute()

const getAssetURL = (image) => {
    // 开发环境使用动态路径
    return new URL(`../../assets/img/${image}`, import.meta.url.split('?')[0]).href
}
watch(router, (newV) => {
  console.log(newV.path)
  const idx = tabbarData.findIndex(item => newV.path === item.path) 
  if(idx === -1) return 
  curidx.value = idx 
})
</script>

<style lang='less' scoped>
  

  .tab-bar {
    :deep(.van-tabbar) {
      position: fixed;;
      bottom: 0;
    }
    // display: inline-block;
    // :deep(.van-tabbar) {
    //   // margin-bottom: 30px;
    //   transition: none;
    // }

    img {
      height: 28px;
    }
  }

</style>
