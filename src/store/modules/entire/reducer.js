import { ROOMLIST } from "./constants"
const initialState = {
  currentPage: 3,
  roomListData:{}
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ROOMLIST:
      return {...state ,roomListData:action.data}
    default:
      return state
  }
}


export default reducer
