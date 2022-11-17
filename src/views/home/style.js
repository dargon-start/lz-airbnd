import styled from "styled-components"

export const HomeWrapper = styled.div`

    .content{
        max-width:1120px;
        padding:20px;
        margin-left:auto;
        margin-right:auto;

        .goodPrice ,.highScore,.discount,.longfor{
            margin-top:50px;
            width:100%;
        }
        .discount{
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
        .longfor{
            .imgItem{
                box-sizing:border-box;
                max-width:25%;
                padding:0 10px;

                img{
                    width:100%;
                    height:auto;
                }
            }
        }
    }

    
`