<template>
  <div class="navbar">
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='less' scoped>
  .navbar {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 46px; 
    border-bottom: 1px solid #f0f0f0;
    
    .title {
      color: var(--primary-color);
      font-size: 16px; 
    }
  }

</style>
