import styled from "styled-components";


export const CenterWrapper = styled.div`
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
`