import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    transform-style: preserve-3d;
    transition: transform 0.3s;
    transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    padding: 100px;
`;

export const Flashcard = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr;
    min-height: 300px;
    min-width: 400px;
    background: ${({ theme }) => theme.colors.manatee};
`;

export const Category = styled.h2`
    text-align: center;
    margin: 0;
    padding: 20px;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
`;

const spin = keyframes`
    0%
    {
        transform: rotateY(0deg);
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
`;

export const FlashcardContent = styled.p`
    animation: ${({ $isFlipped }) => $isFlipped ? css`${spin} 0.1s forwards` : css`${spin} 0.1s backwards`};
    text-align: center;
    font-size: 30px;
    font-weight: 600px;
    color: ${({ theme }) => theme.colors.white};
`;