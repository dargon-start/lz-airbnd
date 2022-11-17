import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { getDiscount, getGoodPrice, getHighScore, getHomeHotRecommendData, getHomeLongforData } from '@/services/modules/home';
export const fetchHomeData = createAsyncThunk('goodPriceData', (payload,{dispatch,getState})=>{
     getGoodPrice().then(res=>{
        dispatch(goodPriceAction(res))
     })
     getHighScore().then(res=>{
        dispatch(highscoreAction(res))
     })
     getDiscount().then(res=>{
        dispatch(discountAction(res))
     })
     getHomeHotRecommendData().then(res=>{
        dispatch(HotRecommendAction(res))
     })
     getHomeLongforData().then(res=>{
        console.log(res);
        dispatch(longForAction(res))
     })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice:{},
    highScore:{},
    disCount:{},
    hotRecommend:{},
    longFor:{}
  },
  reducers: {
    goodPriceAction(state,{payload}){
        state.goodPrice = payload
    },
    highscoreAction(state,{payload}){
        state.highScore = payload
    },
    discountAction(state,{payload}){
        state.disCount = payload
    },
    HotRecommendAction(state,{payload}){
      state.hotRecommend = payload
    },
    longForAction(state,{payload}){
      state.longFor = payload
    }
  },
})
export const {goodPriceAction,highscoreAction,discountAction,HotRecommendAction,longForAction} = homeSlice.actions

export default homeSlice.reducer
