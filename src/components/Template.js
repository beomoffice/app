import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
    width : 100%;
    
    background-color : black;
    border-radius: 16px;
    box-shadow : 0 0 8px 0 rgba(0,0,0, 0.04);
    
    display : flex;
    flex-direction: column;
`

export default function Template({ children }){
    return <TemplateBlock>{children}</TemplateBlock>
}