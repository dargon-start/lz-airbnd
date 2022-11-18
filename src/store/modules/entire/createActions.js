import { getEntireRoomlist } from "@/services/modules/entire"
import { ROOMLIST } from "./constants"

export function roomListAction(data){
    return {type:ROOMLIST,data}
} 

export const getRoomlistAction =  () =>{
    
    return async (dispatch) =>{
        const res = await getEntireRoomlist();
        console.log(res);
        dispatch(roomListAction(res))
    }
}