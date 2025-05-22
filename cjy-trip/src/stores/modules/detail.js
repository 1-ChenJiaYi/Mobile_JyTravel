import { defineStore } from "pinia"
import { getDetailInfos } from "@/service"

const useDetailStore = defineStore('detail', {
  state: () => ({
    detailData: {}, 
    mainPart: {}, 
    pricePart: {},
    curHouse: {},  
    houseId: -1 
  }), 

  actions: {
    async getDetailData() {
      const res = await getDetailInfos(this.houseId) 
      this.detailData = res.data 
      this.mainPart = this.detailData.mainPart 
      this.pricePart = this.detailData.pricePart 
    }
  }, 

  getters: {
    
  }
})

export default useDetailStore