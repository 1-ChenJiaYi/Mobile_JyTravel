import cjyRequest from "../request" 

export function getHotSug() {
  return cjyRequest.get({
    url: '/home/hotSuggests' 
  })
}

