import cjyRequest from "../request" 

export function getDetailInfos(houseId) {
  return cjyRequest.get({
    url: '/detail/infos', 
    params: {
      houseId
    }
  })
}
