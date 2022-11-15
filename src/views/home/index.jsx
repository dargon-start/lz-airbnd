import React, { memo, useEffect } from 'react'
import hyRequest from '@/services'
import { useState } from 'react'
import {HomeWrapper} from './style'

import HomeBanner from './c-cpns/home-banner'
const Home = memo(() => {
  // 定义状态
  const [ highScore, setHighScore ] = useState({})

  // 网络请求的代码
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <HomeWrapper>
        <HomeBanner></HomeBanner>
    </HomeWrapper>
  )
})

export default Home
