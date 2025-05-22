import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/mainStore";
const mainStore = useMainStore() 

class cjyRequest {
  constructor(baseURL, timeout=10000) {
    // 创建实例 
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true 
      return config 
    }, err => {
      return err 
    }) 

    this.instance.interceptors.response.use(config => {
      mainStore.isLoading = false 
      return config
    }, err => {
      mainStore.isLoading = false
      return err 
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      // mainStore.isLoading = true 
      // console.log("发送网络请求")
      this.instance.request(config).then(
        res => {
          resolve(res.data)
        } 
      ).catch( 
        err=> {
          reject(err)
        }
       ).finally(
        // () => {
        //   console.log("触发")
        //   mainStore.isLoading = false 
        // }
       )
    }); 
  }

  get(config) {
    return this.request({
      ...config, 
      method: 'get'
    })   
  }

  post(config) {
    return this.request({
      ...config, 
      method: 'post' 
    })
  }
}

export default new cjyRequest(BASE_URL, TIMEOUT) 
