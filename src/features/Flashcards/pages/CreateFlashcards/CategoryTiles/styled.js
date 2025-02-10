import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 30px;
`;

export const Tile = styled.button`
    border: none;
    padding: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.white};
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const CategoryName = styled.span`
    text-align: center;
    margin: 0;
    letter-spacing: 1px;
`;