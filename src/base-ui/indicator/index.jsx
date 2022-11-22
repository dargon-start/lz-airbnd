import React, { memo, useEffect, useRef } from 'react'
import {IndicatorWrapper} from './style'
const Indicator = memo((props) => {
  const {children,selectIndex = 0} = props
  const scrollDom = useRef()
  // const distance = useRef()

  useEffect(()=>{
      const scrollWidth = scrollDom.current.scrollWidth;
      const clientWidth = scrollDom.current.clientWidth;
      let TotalDistance = scrollWidth - clientWidth;

      const propDom = scrollDom.current.children[selectIndex];
      const propLeft = propDom.offsetLeft;

      let movedistance = propLeft + propDom.clientWidth * 0.5 - clientWidth * 0.5;

      if(movedistance < 0) {
        movedistance = 0;
      }
      if(movedistance > TotalDistance){
        movedistance = TotalDistance
      }

      scrollDom.current.style = `transform:translateX(${-movedistance}px)`

  },[selectIndex])

  return (
    <IndicatorWrapper>
        <div className='continer' >
          <div className='scrollContiner' ref={scrollDom}>
             {children}
          </div>
        </div>
    </IndicatorWrapper>
  )
})

export default Indicator