import LzRequest from "../index";

export function getGoodPrice(){
    return LzRequest.get({
        url: "/home/goodprice"
    })
}

export function getHighScore(){
    return LzRequest.get({
        url: "/home/highscore"
    })
}

export function getDiscount(){
    return LzRequest.get({
        url:'/home/discount'
    })
}

export function getHomeHotRecommendData() {
  return LzRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return LzRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return LzRequest.get({
    url: "/home/plus"
  })
}