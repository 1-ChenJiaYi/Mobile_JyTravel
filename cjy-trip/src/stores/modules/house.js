import getHouseList from "@/service/modules/houseList";

import { defineStore } from "pinia";


const useHouseStore = defineStore("house", {
  state: () => ({
    houseList: [], 
    curpage: 1 
  }), 
  actions: {
    async getHouseListData() {
      const res = await getHouseList(this.curpage)
      this.curpage ++ 
      this.houseList.push(...res.data)  
    } 
  }
})

export default useHouseStore 