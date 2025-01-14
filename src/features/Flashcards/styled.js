import styled, { css, keyframes } from "styled-components";

export const FlashcardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background: ${({ theme }) => theme.colors.gunPowder};
    transform-style: preserve-3d;
    transition: transform 0.3s;
    transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const StyledSection = styled.section`
    margin-top: 60px;
    background: ${({ theme }) => theme.colors.gunPowder};
    border-radius: 4px;

    ${({ $flashcard }) => $flashcard && css`
        width: 450px;
    `}
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Title = styled.h2`
    text-align: center;
    padding: 20px;
    margin: 0;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.tuna};
`;

export const SectionForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;

    ${({ $flashcard }) => $flashcard && css`
        grid-template-columns: 1fr;
    `}
`;

export const SectionInput = styled.input`
    padding: 10px;
    background:${({ theme }) => theme.colors.chatelle};
    border: none;
    border-radius: 4px;
    font-size: 18px;
`;

export const SectionButton = styled.button`
    background: ${({ theme }) => theme.colors.portage};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    padding: 10px;
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
        opacity: 90%;
    }
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