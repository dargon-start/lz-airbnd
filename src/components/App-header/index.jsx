import React, { memo, useState } from 'react'
import HeaderCenter from './c-cpm/header-center'
import HeaderLeft from './c-cpm/header-left'
import HeaderRight from './c-cpm/header-right'
import { HeaderWrapper } from './style'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from "styled-components"
import classNames from 'classnames'
const index = memo(() => {

  const [isFixed,setisFixed] = useState(true);

  const {windowY} =useScrollPosition();
  console.log(windowY,'yyy');
  let isTop = windowY === 0;
  const themeColor = isTop? "#fff":"#222" 

  console.log(isTop);
  const dynamicClasses = classNames({notTop: !isTop,fixed: isFixed})
  return (
    <HeaderWrapper className={dynamicClasses}>
      <ThemeProvider theme={{Headercolor: themeColor}}>
        <HeaderLeft isTop={isTop}></HeaderLeft>
        <HeaderCenter isTop={isTop}></HeaderCenter>
        <HeaderRight></HeaderRight>
      </ThemeProvider>
    </HeaderWrapper>
  )
})

export default index