import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [] ,itemWidth} = props

  return (
    <RoomsWrapper>
      {
        roomList.map(item => {
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms