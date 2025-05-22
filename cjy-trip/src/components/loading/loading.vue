<template>
  <div class="loading" 
  v-if="isLoading"
  @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/mainStore';
import { storeToRefs } from 'pinia';
const mainStore = useMainStore() 
const {isLoading} = storeToRefs(mainStore)

function loadingClick() {
  isLoading.value = false 
}
</script>

<style lang='less' scoped>
.loading {
  margin: auto;
  width: 100%; 
  /* height: 40px; */
  position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;  

  display: flex; 
  align-items: center; 
  justify-content: center;


  background-color: rgba(0, 0, 0, 0.5);

  .bg {
    width: 104px;
    height: 104px;
    display: flex; 
    align-items: center; 
    justify-content: center;


    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    img {
      height: 70px;
      width: 70px;
      margin-bottom: 8px;
    }

  } 
}

</style>
