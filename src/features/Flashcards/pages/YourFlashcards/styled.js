import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    margin: 20px auto 20px auto;
`;

export const CategoryWrapper = styled.div`
   
`;

export const GetExampleFlashcardsButton = styled.button`
    max-width: 350px;
    padding: 20px 30px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.turquoise};
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        opacity: 90%;
    };
`;

export const Category = styled.h2`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.cornflower};
    padding: 20px;
    margin: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const EditSetButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.easternBlue};
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
    background: ${({ theme }) => theme.colors.pink};
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Flashcard = styled.div`
    position: relative;
    min-width: 150px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brinkPink};
    padding: 10px;
    border-radius: 5px;
    transition: transform 1s;

    &:hover{
        transform: scale(1.1);
    };
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
        background: ${({ theme }) => theme.colors.brightSun};
    `};

    ${({ $removeSet }) => $removeSet && css`
        font-size: 21px;
        width: 40px;
        height: 40px;
        top: -20px;
        right: -20px;
    `};

    ${({ $done }) => $done && css`
        left: -10px;
        background: ${({ theme }) => theme.colors.pastelGreen};
    `};
`;

export const Word = styled.p`
    border-bottom: 2px dashed ${({ theme }) => theme.colors.white};
    margin: 0;
    padding: 16px;

    ${({ $second }) => $second && css`
        border-bottom: none;
    `};
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.pink};
    text-align: center;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.colors.portage};
    width: 130px;
`;