import cjyRequest from "../request" 

export function getCityAll() {
  return cjyRequest.get({
    url: '/city/all' 
  })
}