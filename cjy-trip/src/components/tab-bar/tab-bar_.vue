<template>
  <div class="tab-bar">

    <template v-for="(item, idx) in tabbarData" :key="item.text"> 
      <div class="tab-bar-item" 
      @click="ChangeTab(item.path, idx)" 
      :class="{active: curidx === idx}"> 

        <img v-if="curidx !== idx"
         :src="getAssetURL(item.image)" alt="">
        <img v-else
         :src="getAssetURL(item.imageActive)" alt="">
      </div>
    </template>

  </div>
</template>

<script setup>
  import tabbarData from '@/assets/data/tabbar.js' 
  import {getAssetURL} from '@/utils/get_img.js' 
  import {useRouter} from 'vue-router' 
  import {ref} from "vue" 
  const curidx = ref(0) 
  const router = useRouter() 

  function ChangeTab(path, idx) {
    curidx.value = idx 
    router.push(path) 
  }


</script>

<style lang='less' scoped>
  .tab-bar {
    position: fixed; 
    bottom: 0;
    left: 0;
    right: 0; 
    height: 50px;  
    display: flex; 
    border-top: 1px solid #f3f3f3;    

  }

  .tab-bar-item {
    flex: 1; 
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    
    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px; 
    }
    
    .text {
      font-size: 12px; 
    }
  }

</style>
