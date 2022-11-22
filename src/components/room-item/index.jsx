import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate ,Carousel} from 'antd';
import { LeftOutlined ,RightOutlined} from '@ant-design/icons'
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData,itemWidth = '25%' } = props
  const carousel = useRef()
  const [selectIndex , setselectIndex] = useState(0)

  let len = itemData.picture_urls?.length -1;
  function prevFn(){
    carousel.current.prev()

    let newIndex = selectIndex - 1;
    if(newIndex < 0){
      newIndex = len;
    }
    setselectIndex(newIndex)
  }

  function nextFn(){
    carousel.current.next()
    
    let newIndex = selectIndex + 1;
    if(newIndex > len){
      newIndex = 0;
    }
    setselectIndex(newIndex)
  }

  function active_towFn(index){
    if(selectIndex === index) return false;
    if(selectIndex < 2  && (index < selectIndex || index < 4 )){
      return true;
    }else if(selectIndex > len-2 && (index > len-4 || index > selectIndex && index <= len)){
      return true
    }else if((selectIndex >= 2 && selectIndex <= len-2) && (index === selectIndex - 1 || index === selectIndex + 1)  ){
      return true;
    }else{
      return false;
    }
  }

  function acitve_sideFn(index){
    if(selectIndex === index) return false;
    if(selectIndex < 2 && index === 4){
      return true
    }else if(selectIndex > len-2 && index === len-4){
      return true
    }else if((selectIndex >= 2 && selectIndex <= len-2) && (index === selectIndex - 2 || index === selectIndex + 2)  ){
      return true;
    }else{
      return false
    }
  }
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className='inner'>
          {/* 轮播图 */}
          {itemData.picture_urls && (
             <div className='cover_swiper'>
                 <div className='prev' onClick={prevFn}>
                    <LeftOutlined></LeftOutlined>
                 </div>
                 <div className='next' onClick={nextFn}>
                    <RightOutlined></RightOutlined>
                 </div>
                 <div className='indicator'>
                    <Indicator selectIndex={selectIndex}>
                      {
                        itemData.picture_urls.map((item,index)=>(
                          <div className='dot-item' key={index}>
                            <span className={classNames('dot',
                            {
                              active:selectIndex === index,
                              active_tow:active_towFn(index),
                              active_side:acitve_sideFn(index)
                            })}></span>
                          </div>
                        ))
                      }
                    </Indicator>
                 </div>
                 <Carousel className='carousel' ref={carousel} dots={false}>
                    {itemData.picture_urls.map(pic=>(
                      <img key={pic} src={pic} alt="" />
                    ))}
                 </Carousel>
             </div>
          )}
          {/* 单图 */}
          {!itemData.picture_urls && (
            <div className='cover'>
              <img  src={itemData.picture_url} alt="" />
            </div>
          )}
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
          {itemData.star_rating &&
            <Rate disabled allowHalf  
              defaultValue={itemData.star_rating}
              style={{color:'#008489'}}
              className='rateStyle'>
              
            </Rate>
          }
          { itemData.star_rating ? 
             <span className='count'>{itemData.reviews_count}</span>
             :
             <span className='count'>{itemData.reviews_count}条评价</span>
          }
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth:PropTypes.string
}

export default RoomItem