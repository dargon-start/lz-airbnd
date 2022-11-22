import React, { memo, useEffect, useMemo, useState } from 'react'
import {HomeWrapper} from './style'
import { useSelector,useDispatch, shallowEqual } from 'react-redux'
import { fetchHomeData } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import HomeSection from './c-cpns/home-secion'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scrollView'
import SectionFooter from '@/components/section-footer'


const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  // 网络请求的代码
  useEffect(() => {
    dispatch(fetchHomeData())
  }, [dispatch])

  const {goodPrice,highScore,disCount,longFor}  = useSelector((state)=>({
    goodPrice:state.home.goodPrice,
    highScore:state.home.highScore,
    disCount:state.home.disCount,
    longFor:state.home.longFor
  }),shallowEqual)

  const [curIndex,setcurIndex] = useState(0);
  const tabItemFn = (index,name) => {
        setcurIndex(index)
        setcurName(name);
  }
  const tabNames = useMemo(()=>{
    return disCount.dest_address?.map(item=>{
      return item.name
    })
  },[disCount])
   

  const [curName,setcurName] = useState(null)
  
  useEffect(()=>{
    tabNames && setcurName(tabNames[0])
  },[tabNames])

  return (
    <HomeWrapper>
        <HomeBanner></HomeBanner>
        <div className='content'>
          <div className='discount'>
            <SectionHeader title={disCount.title} subtitle={disCount.subtitle}></SectionHeader>
            <ScrollView tabList={tabNames}>
              {
                  tabNames?.map((item,index)=>{
                    return (
                      <div key={item}  className={classNames({active:curIndex === index},'tabItem')}
                        onClick={()=>tabItemFn(index,item)}
                      >{item}</div>
                    )
                  })
                }
            </ScrollView>
            { disCount.dest_list &&
              <SectionRooms roomList={disCount.dest_list[curName]} itemWidth='33.33%'></SectionRooms>
            }
            <SectionFooter name='折扣'></SectionFooter>
          </div>
          <div className='longfor'>
            <SectionHeader title={longFor.title} subtitle={longFor.subtitle}></SectionHeader>
            <ScrollView tabList={longFor.list} shadow={false}>
              {
                  longFor.list?.map((item,index)=>{
                    return (
                      <div key={item.city}  className={classNames({active:curIndex === index},'imgItem')}
                        onClick={()=>tabItemFn(index,item)}
                      >
                        <a href={item.image_url}>
                          <img src={item.picture_url} alt="" />
                        </a>
                      </div>
                    )
                  })
                }
            </ScrollView>
          </div>
          <HomeSection data={goodPrice}></HomeSection>
          <HomeSection data={highScore}></HomeSection>
        </div>
    </HomeWrapper>
  )
})

export default Home
