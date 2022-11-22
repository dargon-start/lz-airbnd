import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo((props) => {
  const {isTop} = props;
  const navigate = useNavigate()
  function navTo(){
    navigate('/home')
  }

  return (
    <LeftWrapper isTop={isTop}>
        <div className='logo' onClick={navTo}>
           <IconLogo></IconLogo>
        </div>
    </LeftWrapper>
  )
})

export default HeaderLeft