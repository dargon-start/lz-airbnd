import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HomeSectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSection = memo((props) => {
  return (
    <HomeSectionWrapper >
        <div  className='goodPrice'>
          <SectionHeader title={props.data.title}></SectionHeader>
          <SectionRooms roomList={props.data.list} itemWidth='25%'></SectionRooms>
          <SectionFooter></SectionFooter>
        </div>
    </HomeSectionWrapper>
  )
})

HomeSection.propTypes = {
    data:PropTypes.object
}

export default HomeSection