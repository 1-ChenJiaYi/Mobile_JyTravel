import { getHotSug } from "@/service/modules/hotsug";
import { getCategory } from "@/service/modules/category";
import { defineStore } from "pinia";

const useSearchStore = defineStore('hotSug', {
  state: () => ({
    hotSugList: [], 
    category: [] 
  }), 
  actions: {
    async getHotSugData() {
      const res = await getHotSug() 
      this.hotSugList = res.data 
    }, 

    async getCategoryData() {
      const res = await getCategory()
      this.category = res.data
    }
  }
})


export default useSearchStore 

