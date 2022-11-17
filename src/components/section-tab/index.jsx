import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { TabWrapper } from './style'
import classNames from 'classnames'
import { LeftOutlined ,RightOutlined} from '@ant-design/icons'

const SectionTab = memo((props) => {
    const {tabNames =[],getCurName} = props
    const [curIndex,setcurIndex] = useState(0);
    const [propIndex,serpropIndex] = useState(0);
    const [leftisShow,setleftisShow] = useState(false);
    const [rightisShow,setrightisShow] = useState(false);

    const distance = useRef()
    const scorllDom = useRef() 
    const pIndex = useRef()
    pIndex.current = propIndex
    useEffect(()=>{
      const scrollWidth = scorllDom.current.scrollWidth;
      const clientWidth = scorllDom.current.clientWidth;
      distance.current = scrollWidth - clientWidth;
      console.log(distance.current);

      if(distance.current > 0){
          setrightisShow(true);
      }
      // 窗口大小变化后，控制是否显示右侧按钮
      window.addEventListener('resize',function(){
          const scrollWidth = scorllDom.current.scrollWidth;
          const clientWidth = scorllDom.current.clientWidth;
          distance.current = scrollWidth - clientWidth;
          console.log(distance.current,'all');

          const propDom = scorllDom.current.children[pIndex.current];
          const propDistance = propDom.offsetLeft;

          console.log(propDistance,'distance',pIndex.current);

          setrightisShow(propDistance < distance.current)
      })
      
    },[tabNames])

    // 左侧按钮
    const leftMoveFn = ()=>{
            console.log(propIndex);
            const unvisibleDom = scorllDom.current.children[propIndex - 1];
            const unvisibleDistance = unvisibleDom.offsetLeft;

            scorllDom.current.style = `transform:translateX(-${unvisibleDistance}px)`

            setleftisShow(unvisibleDistance > 0)
            setrightisShow(unvisibleDistance < distance.current)
            serpropIndex(propIndex - 1);
    } 
    // 右侧按钮
    const rightMoveFn = ()=>{
        console.log(propIndex);
        // 根据子元素的offsetleft来确定偏移量
        const propDom = scorllDom.current.children[propIndex + 1];
        const propDistance = propDom.offsetLeft;
        scorllDom.current.style = `transform:translateX(-${propDistance}px)`
        console.log(propDistance);

        setrightisShow(propDistance < distance.current)
        setleftisShow(true)

        serpropIndex(propIndex + 1);
    }
    
    const tabItemFn = (index,name) => {
      setcurIndex(index)
      getCurName(name)
    }


 

  return (
    <TabWrapper>
        <div className='continer'>
          <div className='scrollContiner' ref={scorllDom} style={{
            
          }}>
              {
                tabNames.map((item,index)=>{
                  return (
                    <div key={item}  className={classNames({active:curIndex === index},'tabItem')}
                      onClick={()=>tabItemFn(index,item)}
                    >{item}</div>
                  )
                })
              }
          </div>
        </div>
        <div className='leftMask'></div>
        <div className='rightMask'></div>
        {leftisShow &&  <div className='leftMove' onClick={leftMoveFn}><LeftOutlined /></div>}
        {rightisShow && <div className='rightMove' onClick={rightMoveFn}><RightOutlined /></div>}
        
        
    </TabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array,
  getCurName:PropTypes.func
}

export default SectionTab