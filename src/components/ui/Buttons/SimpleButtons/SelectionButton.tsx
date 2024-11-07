import styled from "styled-components";

export const SelectionButton = styled.button<{ isLast?: boolean; isSelected: boolean; }>`
    border: 1px solid #231331;
    width: ${(props) => (props.isLast ? '305px' : '148px')};
    height: 39px;
    border-radius: 20px;
    margin: 4px 8px;
    cursor: pointer;
    transition: 0.4s ease;
    font-size: 11px;
    background-color: ${(props) => (props.isSelected ? '#231331' : 'transparent')};
    color: ${(props) => (props.isSelected ? 'white' : '#231331')};

    &:hover {
        background-color: #231331;
        color: white;
    }
`