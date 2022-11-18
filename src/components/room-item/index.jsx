import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rate ,Carousel} from 'antd';
import { LeftOutlined ,RightOutlined} from '@ant-design/icons'

const RoomItem = memo((props) => {
  const { itemData,itemWidth = '25%' } = props
  const carousel = useRef()
  function prevFn(){
    carousel.current.prev()
  }

  function nextFn(){
    carousel.current.next()
  }

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className='inner'>
          {itemData.picture_urls && (
             <div className='cover_swiper'>
                 <div className='prev' onClick={prevFn}>
                    <LeftOutlined></LeftOutlined>
                 </div>
                 <div className='next' onClick={nextFn}>
                    <RightOutlined></RightOutlined>
                 </div>
                 <Carousel className='carousel' ref={carousel}>
                    {itemData.picture_urls.map(pic=>(
                      <img key={pic} src={pic} alt="" />
                    ))}
                 </Carousel>
             </div>
          )}
          
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