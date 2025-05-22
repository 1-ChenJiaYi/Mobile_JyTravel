import cjyRequest from "../request" 

export default function getHouseList(pageCnt) {
  return cjyRequest.get({
    url: '/home/houselist', 
    params: {
      page: pageCnt 
    }
  })
}