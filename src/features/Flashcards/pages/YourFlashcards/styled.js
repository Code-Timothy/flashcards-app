import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    margin: 20px auto 20px auto;
`;

export const CategoryWrapper = styled.div`
    border: 3px solid ${({ theme }) => theme.colors.chatelle};
`;

export const Category = styled.h2`
    color: ${({ theme }) => theme.colors.chatelle};
    border-bottom: 3px solid ${({ theme }) => theme.colors.chatelle};
    padding: 20px;
    margin: 0;
`;

export const Flashcards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    text-align: center;
`;

export const Flashcard = styled.div`
    min-width: 150px;
    background: ${({ theme }) => theme.colors.chatelle};
    padding: 10px;
    transition: transform 0.5s;

    &:hover{
        transform: scale(1.05);
    };
`;

export const Word = styled.p`
    border-bottom: 2px dashed black;
    margin: 0;
    padding: 16px;

    ${({ $second }) => $second && css`
        border-bottom: none;
    `};
`;