import styled from "styled-components";

export const TabWrapper = styled.div`
    position:relative;
    width:100%;
    .continer{
        width:100%;
        overflow-x:hidden;

        .scrollContiner{
            position:relative;
            display:flex;
            transition:all .5s ease;

            .tabItem{
                    min-width:140px;
                    height:48px;
                    font-size:18px;
                    font-weight:600;
                    text-align:center;
                    line-height:48px;
                    border:1px solid #e0e0e0;
                    margin:5px 12px 5px 0;
                    background-color:#fff;
                    border-radius:5px;
                    transition:box-shadow .5s;
                    cursor: pointer;

                    &:hover{
                        ${props=>props.theme.mixin};
                    }
                }
                .active{
                    background-color:#00848a;
                    color:#fff;
                }
        }
      

      
        
    }
    .leftMask,.rightMask{
        position:absolute;
        top:0;
        width:48px;
        height:58px;
    }

    .leftMask{
        left:0;
        background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
    }

    .rightMask{
        background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
        right:0;
    }



    .leftMove ,.rightMove{
        position:absolute;
        width: 28px;
        height: 28px;
        background-color:#fff;
        border-radius:50%;
        text-align:center;
        line-height:28px;
        border:1px solid #e0e0e0;
        ${props=>props.theme.boxShadow};
        cursor: pointer;
    }

    .leftMove{
        top:50%;
        transform:translate(-50%,-50%);
        left:-12px;
    }
    .rightMove{
        top:50%;
        transform:translate(-50%,-50%);
        right:-12px;
    }
`