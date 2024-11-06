import styled from "styled-components";

export const LongSelectionButton = styled.button`
    border: 1px solid #231331;
    width: 305px;
    height: 39px;
    border-radius: 20px;
    margin: 4px 8px;
    cursor: pointer;
    transition: 0.4s ease;
    padding: 3px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    &:hover {
        background-color: #231331;
        color: white;
    }
`