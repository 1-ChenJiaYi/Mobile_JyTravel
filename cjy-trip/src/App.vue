<template>
  <div class="app">
    <router-view v-slot="props"> 
      <keep-alive :include="['home']">
        <component :is="props.Component"> </component>
      </keep-alive>
    </router-view>

    <div class="tabbar">
      <tab-bar v-if="!route.meta.hideTabBar"/>
    </div>
    <loading/>
  </div>
</template>

<script setup>
import loading from "./components/loading/loading.vue";
import TabBar from "@/components/tab-bar/tab-bar.vue" 
import { useRoute } from "vue-router";
const route = useRoute() 
</script>


<style scoped>

</style>
