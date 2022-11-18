import LzRequest from "../index";

export function getEntireRoomlist(offset=0,size=20){
    return LzRequest.get({
        url:'/entire/list',
        params:{
            offset,
            size
        }
    })
}