<template>
  <div class="home-item-v3">
    <div class="inner">
      <div class="visit">
        <img :src="itemData.image.url" alt="">
      </div>


      <div class="message">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="text">{{ itemData.location }}</div>
        </div>

        <div class="name">
          {{ itemData.houseName }} 
        </div>
        <div class="summary">
          {{ itemData.summaryText }}
        </div>
        
        <div class="price">
          <div class="new-price">￥{{ itemData.finalPrice }}</div> 
          <div class="old-price">￥{{ itemData.productPrice }}</div>
          <div class="distance-price">已减￥{{ diff_of_price }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object, 
    default: () => ({}) 
  }
})

const diff_of_price = computed(() => {
  return -props.itemData.finalPrice + props.itemData.productPrice
})
</script>

<style lang='less' scoped>
.home-item-v3 {
  width: 50%; 

  .inner {
    padding: 5px 5px;
  }
  .visit {
    img {
      border-radius: 10px;
      width: 100%;
      // height: 50%;
    }
  }

  .message {
    width: 100%; 
    // height: 50%;
    .location {
      margin: 4px;
      display: flex; 
      align-items: center; 
      text-align: center;
      .text {
        font-size: 12px;
        color: #666;
        margin-left: 2px;
      }

      img {
        position: relative; 
        bottom: 0px;
        width: 12px;
        height: 12px;
      }
    }
    .name {
      display: -webkit-box;          /* 关键：启用弹性盒子 */
      -webkit-line-clamp: 2;         /* 限制显示行数 */
      -webkit-box-orient: vertical;  /* 垂直方向排列 */
      overflow: hidden;              /* 隐藏超出内容 */
      text-overflow: ellipsis;       /* 超出部分显示省略号 */
    }

    .summary {
      margin-top: 4px;
      font-size: 12px; 
      color: #666;
    }
    
    .price {
      margin-top: 4px;
      display: flex; 
      justify-content: left;
      align-items: center;
      .new-price {
        font-size: 15px;
        color: var(--primary-color);
      }

      .old-price {
        margin-right: 2px;
        margin-left: 2px;
        position: relative; 
        bottom: 3px;;
        font-size: 13px;
        text-decoration: line-through;
        color: #666;
      }

      .distance-price {
        font-size: 12px;
        color: #FFF;
        background-image: linear-gradient(270deg,#f66,#ff9f9f);
        border-radius: 10px;
        padding: 2px 2px;
      }
    }
  }
}


</style>
