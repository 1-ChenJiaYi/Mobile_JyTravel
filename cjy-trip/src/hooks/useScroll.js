import { onMounted, onUnmounted, ref } from "vue"
import {throttle} from "underscore"

export default function useScroll(elRef=window) {
  const isReachBottom = ref(false) 
  const scrollTop = ref(0) 
  const clientHeight = ref(0)  
  const scrollHeight = ref(0) 
  function scrollFn() {
    const el = elRef.value
    if(!el) return 
    if(el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop  
      scrollHeight.value = document.documentElement.scrollHeight
    }
    else {
      scrollTop.value = el.scrollTop
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
    }
    if(scrollTop.value + clientHeight.value + 5 >= scrollHeight.value) {
      isReachBottom.value = true
    } 
    else {
      isReachBottom.value = false
    }
  }
  const throttleScrollFn = throttle(scrollFn, 100) 

  onMounted(() => {
    const el = elRef.value
    if(el) el.addEventListener("scroll", throttleScrollFn)
  })

  onUnmounted(() => {
    const el = elRef.value
    if(el) el.removeEventListener("scroll", throttleScrollFn) 
  })

  return {
    isReachBottom, 
    scrollTop, 
    scrollHeight,
    clientHeight
  }
}