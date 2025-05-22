<template>
  <div class="detail top-page" ref="detailRef">
    <div class="Tabs" v-show="ShowTabs">
      <template v-for="(item, idx) in tabList">
        <div class="Tab"
        @click="TabClick(idx)">
          <div class="text">{{ item }}</div>
          <div class="line" v-show="idx === curActiveIdx"></div>
        </div>
      </template>
    </div>

    <van-nav-bar
      title="房屋详细"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <detailSwipe
    :swape-data="mainPart?.topModule?.housePicture?.housePics"
    /> 

    <div class="regs">
      <div class="reg" :ref="fRef"> 
        <h1>我是redReg</h1> 
      </div>


      <div class="reg" :ref="fRef">
        <h1>我是blueReg</h1> 
      </div>


      <div class="reg" :ref="fRef">
        <h1>我是orangeReg</h1>
      </div>

      <div class="reg" :ref="fRef">
        <h1>我是greenReg</h1>
      </div>

      <div class="reg" :ref="fRef">
        <h1>我是blackReg</h1>
      </div>

      <div class="reg" :ref="fRef"> 
        <h1>我是psReg</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import useDetailStore from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import detailSwipe from './cpns/detail-swipe.vue';
import { computed, ref, watch } from 'vue';
import useScroll from '@/hooks/useScroll';

const router = useRouter() 
function onClickLeft() {
  router.go(-1) 
}

const route = useRoute() 
const detailStore = useDetailStore() 
detailStore.houseId = route.params.id
detailStore.getDetailData() 
const {detailData, mainPart, pricePart} = storeToRefs(detailStore) 

const detailRef = ref() 
const { scrollTop } = useScroll(detailRef) 
const ShowTabs = computed(() => {
  return scrollTop.value >= 350
}) 

const tabList = ['red', 'blue', 'orange', 'green', 'black', 'ps']
const curActiveIdx = ref(0) 
const sectionEls = ref([]) 

function fRef(el) {
  if(!el) return 
  sectionEls.value.push(el) 
}


let is_Click = false 
let curDis = ref(0) 
function TabClick(idx) {
  is_Click = true 
  curActiveIdx.value = idx
  let distance = sectionEls.value[idx].offsetTop 
  if(idx) distance -= 30   
  curDis.value = distance 
  detailRef.value.scrollTo({
    top: distance, 
    behavior: 'smooth' 
  })  
}

watch(scrollTop, (newV) => {
  if(Math.abs(newV - curDis.value) < 1) {
  
    is_Click = false 
  }
  if(is_Click) return 
  let l = 0, r = sectionEls.value.length - 1 
  while(l < r) {
    let mid = Math.floor((l + r + 1) / 2) 
    let dist = sectionEls.value[mid].offsetTop 
    if(mid) dist -= 30 
    if(dist <= newV) {  
      l = mid 
    } 
    else r = mid - 1  
  }
  curActiveIdx.value = l
}) 
</script>

<style lang='less' scoped>
.detail {
  width: 100%; 
  height: 100vh; 
  position: relative;
  overflow-y: auto; 
}
.Tabs {
  position: fixed;
  width: 100%;
  margin-bottom: 2px;
  z-index: 3000;
  border: 1px solid #ccc;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  .Tab {
    position: relative;
    text-align: center;
    flex: 1;

    .line {
      position: absolute;
      bottom: 0;
      left: 0; 
      right: 0; 

      margin: 0 auto;
      width: 70%; 
      height: 2px;
      background-color: blue;
    }
  }

}

.regs {
  .reg {
    margin-top: 2px;
    width: 100%; 
    height: 700px;
  }
}

</style>
