import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { getRoomlistAction } from '@/store/modules/entire/createActions'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EntireWrapper } from './style'
const Entire = memo(() => {

  const dispatch = useDispatch()

  useEffect(()=>{
    window.scrollTo(0,0);
    dispatch(getRoomlistAction())
  },[])

  const {roomListData} = useSelector((state)=>({
    roomListData:state.entire.roomListData
  }))

  return (
    <EntireWrapper>
      <SectionHeader title={'300多出住处'}></SectionHeader>
      <SectionRooms roomList={roomListData?.list} itemWidth='20%'></SectionRooms>
    </EntireWrapper>
  )
})

export default Entire