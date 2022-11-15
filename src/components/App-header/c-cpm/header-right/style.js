import styled from "styled-components";

export const RightWrapper = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    .btns{
        display:flex;

        .btn{
            height:18px;
            line-height:18px;
            padding:12px 15px;
            border-radius:22px;
            cursor: pointer;

            &:hover{
                background-color: #f5f5f5;
            }
        }
    }
    .profile{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        width:77px;
        height:45px;
        border-radius:25px;
        margin-right:25px;
        font-size:14px;
        cursor: pointer;
        color:${(props)=>props.theme.textColor.primaryColor};
        ${props=> props.theme.mixin.boxShadow};

        .panel{
            position:absolute;
            width:250px;
            padding:5px 0;
            border-radius:15px;
            top:55px;
            left:-180px;
            box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
            background-color:#fff;
            .panel-item{
                padding:10px;
                margin:5px 0;
                &:hover{
                    background-color:#f5f5f5;
                }
            }
        }

        .gapline{
            height:1px;
            background:#e0e0e0;
        }
    }
`