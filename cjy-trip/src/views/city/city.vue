<template>
  <div class="city top-page">
    <div class="top">
      <van-search 
      v-model="searchValue"
      placeholder="城市/区域/位置" 
      shape="round" 
      :show-action="true"
      @cancel="cancelClick"

      /> 

      <van-tabs v-model:active="curidx" color="#ff9854">
        <template v-for="(value, key, idx) in allCity" 
        :key="key">  
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>

    </div>

    
    <div class="content">
      <template v-for="(value, key, idx) in allCity">
        <groupItem v-show="curidx === key" :curGroup="value"/>
      </template>
    </div>

    
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import groupItem from './cpns/group-item.vue';

const curidx = ref() 
const searchValue = ref("")

const route = useRouter() 
function cancelClick() {
  route.back() 
}


const cityStore = useCityStore() 
cityStore.fetchAllCitiesData()
const {allCities:allCity} = storeToRefs(cityStore)


const curGroup = computed(
  () => allCity.value[curidx.value] 
)

</script>

<style lang='less' scoped>
  .city {
    // font-size: 12px  ;
    --van-tab-font-size: 13px;
    --van-tabs-line-height: 35px;
  } 

  .content {
    // margin-top: -1px;
    height: calc(100vh - 89px); 
    overflow-y: auto;
  }

  .top {
    position: relative; 
    z-index: 9;
  }
</style>
