import styled from "styled-components";


export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props)=>props.itemWidth};
  padding: 8px;

  .inner {
    width: 100%;
  }
  .cover_swiper{
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;

    .prev,.next{
        display:none;
        position:absolute;
        justify-content:center;
        align-items:center;
        z-index:2;
        top:0;
        width:15%;
        height: 100%;
        font-size:20px;
        background:rgba(0,0,0,10%);
        cursor: pointer;
    }

    .prev{
      left:0;
    }

    .next{
      right:0;
    }

    .indicator{
      position:absolute;
      z-index:9;
      bottom:10px;
      left:0;
      right:0;
      width:30%;
      height:10px;
      margin:0 auto;

      .dot-item{
        flex:0 0 20%;
        height:12px;
        text-align:center;
        line-height:10px;

        .dot{
          display:inline-block;
          width:8px;
          height: 8px;
          border-radius:50%;
          background-color:#e0e0e0;
        }

        .active{
          background-color:#FFF;
        }

        .active_tow{
           width:6px;
           height: 6px;
           background-color:rgba(255,255,255,0.8);
        }
        .active_side{
          width:5px;
          height: 5px;
          background-color:rgba(255,255,255,0.8);
        }
      }
    }

    .carousel{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:hover{
      .prev,.next{
        display:flex;
      }
    }
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.textColor.primaryColor};
    
    .rateStyle{
      font-size:10px;
      .ant-rate-star:not(:last-child){
        margin-right:3px;
      }
    }

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`