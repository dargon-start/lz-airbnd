import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { RightOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const {name} = props
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate('/entire')
  }
  return (
    <FooterWrapper>
        <div className='navTo' onClick={navigateTo}>
            {name && <span className='customName'>查看更多{name}房源</span>}
            {!name && <span className='defaultName'>查看更多</span>}
            <RightOutlined></RightOutlined>
        </div>
    </FooterWrapper>
  )
})

export default SectionFooter