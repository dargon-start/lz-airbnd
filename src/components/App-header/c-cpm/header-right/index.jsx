import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [isShowPanel,setIsShowPanel] = useState(false);

  useEffect(()=>{
      function windowFn(){
        setIsShowPanel(false)
      }
      window.addEventListener('click',windowFn,true)
      return ()=>{
        window.removeEventListener('click',windowFn,true)
      }
  })

  function profileFn(){
    setIsShowPanel(true);
  }

  return (
    <RightWrapper>
        <div className='btns'>
          <span className='btn'>登录</span>
          <span className='btn'>注册</span>
          <span className='btn'>
            <IconGlobal></IconGlobal>
          </span>
        </div>
        <div className='profile' onClick={profileFn}>
          <span>
            <IconMenu></IconMenu>
          </span>
          <span>
            <IconAvatar></IconAvatar>
          </span>
          {
            isShowPanel && (
              <div className='panel'>
                <div className='panel-item' style={{fontWeight:600}}>注册</div>
                <div className='panel-item'>登录</div>
                <div className='gapline'></div>
                <div className='panel-item'>出租房源</div>
                <div className='panel-item'>开展体验</div>
                <div className='panel-item'>帮助</div>
              </div>
            )
          }
        </div>   
    </RightWrapper>
  )
})

export default HeaderRight