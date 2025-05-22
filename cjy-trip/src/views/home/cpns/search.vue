<template>
  <div class="search">
    <div class="location bottom-line">
      <div class="city"
      @click="cityClick"> {{curCity.cityName}} </div> 

      <div class="position"
      @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <div class="section date-range bottom-line" @click="ChoiceDate">
      <div class="start">
        <span class="top">入住</span>
        <span class="time"> {{ startDateV }} </span>
      </div>
      <div class="stay">
        共{{stayCnt}}晚
      </div>
      
      <div class="end">
        <span class="top">离店</span>
        <span class="time"> {{ endDateV }}</span>
      </div>
    </div>
    
    <van-calendar v-model:show="showCalendar" 
    switch-mode="year-month" 
    type="range"
    color="#ff9854"
    :round="false"
    @confirm="onConfirm"
    :show-confirm="false"
    />

    <div class="sign bottom-line">
      <div class="sign-top bottom-line">
        <span class="text">价格不限</span> 
        <span class="text">人数不限</span>
      </div>
      <div class="sign-bottom">
        <span class="text">关键字/位置/民宿</span>
      </div>
    </div>

    <div class="hotSug">
      <template v-for="(item, idx) in hotSugList"> 
        <div class="item"
        :style="{
          color: item.tagText.color,  
          background: item.tagText.background.color
        }">
          {{ item.tagText.text }} 
        </div>
      </template>
    </div>


    <div class="searchBtn" @click="searchBtnClick">
      开始搜索
    </div>



  </div>
</template>

<script setup>
import {computed, ref} from "vue" 
import useCityStore from '@/stores/modules/city'
import { formatMonthDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import useSearchStore from "@/stores/modules/search"
import useMainStore from "@/stores/modules/mainStore"
const route = useRouter()  
const cityStore = useCityStore()
const {curCity} = storeToRefs(cityStore) 

const hotSugStore = useSearchStore() 
hotSugStore.getHotSugData() 
const {hotSugList} = storeToRefs(hotSugStore)

// 日期处理：
const MainStore = useMainStore() 
const {startDateV, endDateV, stayCnt, startDate, endDate} = storeToRefs(MainStore) 

const showCalendar = ref(false) 

function positionClick() {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功", res) 
  }, err => {
    console.log("获取位置失败", err) 
  }, {
    enableHighAccuracy: true, 
    timeout: 10000, 
    maximumAge: 0 
  }) 
}

function cityClick() {
  route.push("/city") 
}

function ChoiceDate() {
  showCalendar.value = true 
}

function onConfirm(date) {
  const l = date[0]
  const r = date[1]
  startDate.value = l
  endDate.value = r  
  showCalendar.value = false
}

function searchBtnClick() {
  // console.log("btn")

  route.push({
    path: '/search', 
    query: {
      startDate: startDate.value,
      endDate: endDate.value, 
      curCity: curCity.value.cityName 
    }
  })
}

</script>

<style lang='less' scoped>
  .searchBtn {
    margin: 0 auto;
    margin-top: 5px;
    width: 342px; 
    height: 38px; 
    max-height: 50px; 
    font-weight: 500; 
    font-size: 18px; 
    line-height: 38px; 
    text-align: center; 
    border-radius: 20px; 
    color: #fff; 
    background-image: var(--theme-linear-gradient);

  }

  .hotSug {
    margin: 0px 10px;
    margin-top: 12px;
    margin-left: 5px;

    display: flex; 
    flex-wrap: wrap;
    justify-content: left;
    .item {
      padding: 4px 3px;
      margin: 5px 3px;
      font-size: 12px;
      border: 1px solid #ccc;
      border-radius: 14px;
    }
  }
  .search {
    --van-calendar-popup-height: 100%; 

    .sign {
      color: #aaa;
      margin: 7px 10px;
      .sign-top {
        display: flex; 
        flex-wrap: wrap; 
        justify-content: space-between; 
      }

      .sign-bottom {
        margin-top: 15px;
      }
    }
  }

  .location {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
    font-size: 12px;
    .city {
      font-size: 14px;
      color: #333; 
    }

    .position {
      display: flex; 
      align-items: center;
      justify-content: space-between; 
      height: 36px;

      .text {
        color: #666;
        margin-right: 5px;
      }
      img {
        width: 18px; 
        height: 18px;
      }
    }
  }

  .date-range {
    margin-left: 10px; 
    margin-right: 10px;
    height: 40px;
    display: flex; 
    justify-content: space-between;
    margin-top: 5px;

    .stay {
      font-size: 12px;
      color: #aaa; 
      position: relative;
      top: 10px;
    }
    .start, .end {
      display: flex; 
      flex-direction: column;
      justify-content: left;

      .top {
        color: #aaa; 
        font-size: 12px;
      }
    }
  }

</style>
