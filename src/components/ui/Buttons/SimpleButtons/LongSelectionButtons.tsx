import styled from "styled-components";

export const LongSelectionButton = styled.button<{isSelected: boolean; }>`
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
    background-color: ${(props) => (props.isSelected ? '#231331' : 'transparent')};
    color: ${(props) => (props.isSelected ? 'white' : '#231331')};


    &:hover {
        background-color: #231331;
        color: white;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 180px;
        height: 44px;
    }

    @media (min-width: 1280px) {
        width: 180px;
        height: 44px;
    }
`