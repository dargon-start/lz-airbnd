import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position:fixed;
    z-index:19;
    width:100%;
    top:0;
    display:flex;
    align-items:center;
    height:80px;
    background: rgba(255,255,255,0);
    color:#fff;

    &.notTop {
        background-color: rgba(255,255,255,1);
        color:#000;
    }
`