import styled from "styled-components";

export const FooterWrapper = styled.div`
    margin:10px 5px;
    .navTo{
        cursor: pointer;

        .customName{
            font-size:18px;
            font-weight:600;
            color:#00848a;
            margin-right:5px;
            
            &:hover{
            text-decoration:underline #00848a 2px; 
        }
        }
        .defaultName{
            font-weight:600;
            margin-right:5px;
        }

        
    }
  
`