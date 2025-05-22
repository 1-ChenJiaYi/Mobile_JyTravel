<template>
  <div class="message">
    <h2>message</h2>
    <button @click="btnClick"> 
      返回上一页 
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function btnClick() {
  router.go(-1) 
}
</script>

<style lang='less' scoped>

</style>
