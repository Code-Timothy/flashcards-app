import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

export const Tile = styled.div`
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gunPowder};
`;

export const CategoryName = styled.h2`
    text-align: center;
    padding: 20px;
    margin: 0;
    letter-spacing: 1px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.steelGray};
`;