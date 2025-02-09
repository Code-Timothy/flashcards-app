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
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.chatelle};
    border-bottom: 3px solid ${({ theme }) => theme.colors.chatelle};
    padding: 20px;
    margin: 0;
`;

export const EditSetButton = styled.button`
    color: ${({ theme }) => theme.colors.chatelle};
    background: ${({ theme }) => theme.colors.steelGray};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        opacity: 90%;
    };
`;

export const Flashcards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
    text-align: center;
`;

export const Flashcard = styled.div`
    position: relative;
    min-width: 150px;
    background: ${({ theme }) => theme.colors.chatelle};
    padding: 10px;
    border-radius: 5px;
`;

export const Button = styled.button`
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    border: none;
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.crimson};
    color: ${({ theme }) => theme.colors.white};
    transition: transfrom 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        opacity: 90%;
    };

    ${({ $edit }) => $edit && css`
        left: -10px;
        background: ${({ theme }) => theme.colors.buttercup};
    `};
`;

export const Word = styled.p`
    border-bottom: 2px dashed black;
    margin: 0;
    padding: 16px;

    ${({ $second }) => $second && css`
        border-bottom: none;
    `};
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.chatelle};
    text-align: center;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.colors.portage};
    width: 130px;
`;