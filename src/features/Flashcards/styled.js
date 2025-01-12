import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const FlashCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    min-width: 500px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.manatee};
`;