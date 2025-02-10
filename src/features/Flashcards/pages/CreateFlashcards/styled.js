import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin-top: 60px;
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 5px;

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
    background: ${({ theme }) => theme.colors.cornflower};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
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
    background:${({ theme }) => theme.colors.tutu};
    border: none;
    border-radius: 4px;
    font-size: 18px;
`;

export const SectionButton = styled.button`
    background: ${({ theme }) => theme.colors.easternBlue};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    padding: 10px;
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        opacity: 90%;
    }
`;