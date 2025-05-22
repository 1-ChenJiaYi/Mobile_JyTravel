<template>
  <div class="group-items">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">

      <van-index-anchor index="热门"/> 
      <div class="list">
        <template v-for="(city, idx) in curGroup.hotCities" :key="idx">
          <div class="city"
          @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(item, idx1) in curGroup?.cities" :key="idx1">
        <van-index-anchor :index="item.group" /> 
        <template v-for="city, idx2 in item.cities" :key="idx2"> 
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>

    </van-index-bar>


      <!-- <template v-for="(item, idx1) in curGroup?.cities" :key="idx1"> 
        <div class="group-item">
          <h2>标题： {{ item.group }}</h2>
          <div class="list">
            <template v-for="(city, idx2) in item.cities" :key="idx2">
              <div class="city">
                {{ city.cityName }}
              </div>
            </template>
          </div>
        </div>
      </template> -->
  </div>
</template>   

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    curGroup: {
      type: Object, 
      default: () => {

      }
    }
  })

const indexList = computed(() => {
  const L = props.curGroup.cities.map(item => item.group) 
  L.unshift('#') 
  return L
})

const route = useRouter() 
const cityStore = useCityStore() 
function cityClick(city) {
  cityStore.curCity = city
  route.back() 
}

</script>

<style lang='less' scoped>
.list {
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around; 
  padding: 10px; 
  padding-right: 25px;
  .city {
    color: #000;
    width: 70px; 
    height: 28px; 
    line-height: 28px; 
    text-align: center;
    border-radius: 14px;
    font-size: 12px; 
    background-color: #fff4ec;
    margin: 10px 0;
  }
}

</style>
