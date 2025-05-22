<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white"
    @change="foo"
    >
      <van-swipe-item 
        v-for="(item, idx) in swapeData" 
        :key="idx"
        class="item"
      >
        <img :src="item.url" alt="">
      </van-swipe-item>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <span 
            v-for="title in titleSet" 
            :key="title"
            :class="{indItem:true, active:curTitle===title}"
          >
            <span class="text">{{ title }}</span>
            <span class="pos" v-show="curTitle===title">
              {{ reallyIdx[curIdx] }}/{{ TitleCnt[title] }}
            </span>
          </span>
        </div>     
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  swapeData: {
    type: Array, 
    default: ()=>[]
  }
}) 

const curIdx = ref(0) 
const curTitle = computed(() => {
  return ChangeStr(props.swapeData[curIdx.value].title)  
})

function ChangeStr(s) {
  return s?.replace("：", "").replace("【", "").replace("】", "") || ""
}

const titleSet = computed(() => {
  const se = new Set(props.swapeData.map(item => ChangeStr(item.title))) 
  return Array.from(se)  
})

const reallyIdx = computed(() => {
  const result = {}
  const counts = {}
  titleSet.value.forEach(title => {
    counts[title] = 1
  })
  props.swapeData.forEach((item, idx) => {
    const title = ChangeStr(item.title)
    result[idx] = counts[title]
    counts[title]++
  })
  return result
})

const TitleCnt = computed(() => {
  const obj = {} 
  props.swapeData.forEach(item => {
    obj[ChangeStr(item.title)] = (obj[ChangeStr(item.title)] || 0) + 1 
  })
  return obj 
})

function foo(idx) {
  curIdx.value = idx 
}
</script>

<style lang='less' scoped>
.my-swipe {
  position: relative;
  height: 200px;
  .item {
    img {
      height: 100%; 
      width: 100%;
    }
  }
  .custom-indicator {
    color: #FFF; 
    position: absolute; 
    right: 0; 
    bottom: 1px;
    display: flex; 
    justify-content: right;

    .indItem {
      font-size: 12px;
      margin-right: 3px;
      display: flex; 
      justify-content: center;
      .text {
        margin-right: 4px;
      }
    }

    .active {
      background-color: #fff; 
      color: #333;
    }
  }
}
</style>