import styled from "styled-components";

interface StatusBarProps {
    width?: string;
  }

export const StatusBar = styled.div<StatusBarProps>`
    background-color:#231331;
    height:4px;
    width: ${(props) => props.width || '54px'};;
    position:absolute;
    top:0;
    z-index:100;
`