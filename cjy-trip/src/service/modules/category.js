import cjyRequest from "../request" 

export function getCategory() {
  return cjyRequest.get({
    url: '/home/categories' 
  })
}

