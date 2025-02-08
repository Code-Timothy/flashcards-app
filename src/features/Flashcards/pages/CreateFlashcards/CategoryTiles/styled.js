import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px;
`;

export const Tile = styled.button`
    border: none;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gunPowder};
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const CategoryName = styled.span`
    text-align: center;
    padding: 20px;
    margin: 0;
    letter-spacing: 1px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.steelGray};
`;