<template>
  <div class="search-bar">
    <h2>search-bar</h2>
    <div class="date">
      <span class="day"> {{ startDateV }} </span>
      <span class="day"> {{ endDateV }} </span>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/mainStore';
import { storeToRefs } from 'pinia';
const MainStore = useMainStore() 
const {startDateV, endDateV} = storeToRefs(MainStore) 
</script>

<style lang='less' scoped>
.search-bar {
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  height: 45px; 
  padding: 16px 16px 16px; 
  z-index: 100;
  width: 100%; 
  background-color: red;
}

</style>
