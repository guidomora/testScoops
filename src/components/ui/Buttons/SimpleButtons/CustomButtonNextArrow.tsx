import styled from "styled-components";

export const CustomButtonNextArrow = styled.button<{ isFinal?: boolean; hidden?: boolean }>`
    background-color: #231331;
    color: white;
    border-radius: 20px;
    width: ${(props) => (props.isFinal ? '140px' : '100px')};
    height: 35px;
    margin-top: 25px;
    font-size: 12px;
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;
