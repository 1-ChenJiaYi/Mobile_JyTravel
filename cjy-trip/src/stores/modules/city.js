import { getCityAll } from '@/service/modules/city'
import {defineStore} from 'pinia' 

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {

    }, 
    curCity: {'cityName': '广州'}

  }), 
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})   

export default useCityStore

