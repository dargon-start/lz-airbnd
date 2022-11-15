import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='text'>
        搜索房源和体验
      </div>
      <div className='icon'>
        <IconSearchBar></IconSearchBar>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter