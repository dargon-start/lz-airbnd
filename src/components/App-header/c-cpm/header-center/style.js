import styled from "styled-components";


export const CenterWrapper = styled.div`
    transition:all 200ms;

    .search-detail {
        position: relative;
        transform-origin: 50% 0;
        /* transition: all 250ms linear; */

        .infos {
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
   
    transition:all 200ms;
    .search-bar{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:300px;
            height:48px;
            padding:0 8px;
            border:1px solid #ddd;
            box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
            border-radius:25px;
            cursor: pointer;
            box-sizing:border-box;

            ${props=> props.theme.mixin.boxShadow}

            .text{
                color:${props=>props.theme.textColor.secondaryColor};
                font-size:14px;
                font-weight:600;
                padding:0 16px;
            }
            .icon{
                display:flex;
                justify-content:center;
                align-items:center;
                width: 32px;
                height: 32px;
                border-radius:25px;
                background-color:${props=>props.theme.color.primaryColor};
                color:#fff;
            }
    }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
    
`