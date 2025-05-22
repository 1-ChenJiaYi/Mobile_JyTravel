<template>
  <div class="house">
    <!-- <h2>house组件</h2> -->
    <h1 class="title">热门精选</h1>
    <div class="content">
      <template v-for="(item, idx) in houseList" :key="item.data.houseId">
          <KeepAlive :include="['homeItemV9', 'homeItemV3']">
            <component 
            :itemData="item.data"
            :is="getComponent(item.discoveryContentType)"
            @click="itemClick(item.data.houseId)"
            /> 
          </KeepAlive> 
      </template>
    </div>
  </div>
</template>

<script setup>
import homeItemV9 from '@/components/tab-bar/house-item/home-item-v9.vue';
import homeItemV3 from '@/components/tab-bar/house-item/home-item-v3.vue';
import useHouseStore from '@/stores/modules/house';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const houseStore = useHouseStore() 
houseStore.getHouseListData()  
const {houseList} = storeToRefs(houseStore) 
function getComponent(type) {
  if(type === 9) return homeItemV9 
  else return homeItemV3
}

const router = useRouter() 
function itemClick(id) {
  // console.log("触发事件", id) 
  router.push({
    path: `/detail/${id}`, 
  }) 
}
</script>

<style lang='less' scoped>
.house {
  padding-bottom: 30px;
}
.title {
  margin-left: 15px;
}
.content {
  padding: 20px 20px;
  // padding-bottom: 20px;
  display: flex; 
  flex-wrap: wrap; 
}
</style>
