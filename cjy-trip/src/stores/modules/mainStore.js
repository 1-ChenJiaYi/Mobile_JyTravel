import { formatMonthDay, dateDistance } from "@/utils/format_date";
import { defineStore } from "pinia";

const useMainStore = defineStore('mainStore', {
  state: () => ({
    startDate: new Date(),
    endDate: new Date(Date.now() + 86400000), 
    isLoading: false, 
  }), 
  getters: {
    stayCnt: state => {
      return dateDistance(state.startDate, state.endDate) 
    }, 
    startDateV: state => {
      return formatMonthDay(state.startDate, "MM月DD日")
    }, 
    endDateV: state => {
      return formatMonthDay(state.endDate, "MM月DD日") 
    }
  }
  , 
  actions: {

  }, 
})


export default useMainStore 

