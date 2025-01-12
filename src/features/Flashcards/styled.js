import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const FlashCard = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr 1fr;
    min-height: 300px;
    min-width: 500px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.manatee};
`;

export const FlashCardContent = styled.p`
    text-align: center;
    font-size: 30px;
    font-weight: 600px;
    color: ${({ theme }) => theme.colors.white};
`;