<template>
  <div class="home-item-v9">

    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        
        <div class="summary">{{ itemData.summaryText }}</div>

        <div class="name">{{ itemData.houseName }}</div>

        <div class="bottom">
          <div class="item">
            <van-rate :model-value="Number(itemData.commentScore)"
            color='#FFFFFF'/>
          </div>
          <div class="price"> {{ itemData.finalPrice }} </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object, 
    default: () => ({}) 
  }
})

// console.log(props.itemData)
</script>

<style lang='less' scoped>
.home-item-v9 {
  width: 50%;
  .inner {  
    padding: 5px 5px;
    position: relative;
    display: flex; 
    flex-direction: column; 
    flex-wrap: wrap; 

    margin: 0 auto;
    .cover {
      img {
        border-radius: 10px;
        width: 100%;
      }
    }

    .infos {
      font-size: 14px; 
      color: rgb(255,255,255);  
      position: absolute; 
      bottom: 8px;
      .summary {
        font-size: 12px;
      }

      .name {
        margin-top: 10px;
        font-size: 12px; 
        display: -webkit-box;          /* 关键：启用弹性盒子 */
        -webkit-line-clamp: 2;         /* 限制显示行数 */
        -webkit-box-orient: vertical;  /* 垂直方向排列 */
        overflow: hidden;              /* 隐藏超出内容 */
        text-overflow: ellipsis;       /* 超出部分显示省略号 */
      }

      .bottom {
        margin-top: 10px;
        display: flex; 
        justify-content: space-between;
        align-items: center;

        .price {
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
  }
}


</style>
