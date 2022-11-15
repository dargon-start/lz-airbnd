import React, { memo } from 'react'
import HeaderCenter from './c-cpm/header-center'
import HeaderLeft from './c-cpm/header-left'
import HeaderRight from './c-cpm/header-right'
import { HeaderWrapper } from './style'
const index = memo(() => {
  return (
    <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default index