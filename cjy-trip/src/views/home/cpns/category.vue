<template>
  <div class="category">
    <template v-for="(item, idx) in category" :key="item.id"> 
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text"> {{ item.title }} </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useSearchStore from '@/stores/modules/search';
import { storeToRefs } from 'pinia';
const searchStore = useSearchStore()
searchStore.getCategoryData() 
const {category} = storeToRefs(searchStore) 

</script>

<style lang='less' scoped>
.category {
  height: 70px;
  display: flex; 
  margin: 10px 11px; 
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none; 
  }

  .item {
    width: 70px; 
    flex-shrink: 0; 
    text-align: center;

    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 32px;
      height: 32px;
    }

    .text {
      margin-top: 4px;
      font-size: 12px;
    }
  }
}

</style>
