import styled from "styled-components";

export const CustomButton = styled.button<{ isFinal?: boolean }>`
    background-color: #231331;
    color: white;
    border-radius: 20px;
    width: ${(props) => (props.isFinal ? '140px' : '100px')};
    height: 35px;
    margin-top: 25px;
    font-size: 12px;
    cursor: pointer;
`