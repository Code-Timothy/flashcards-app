import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: ${({ theme }) => theme.colors.turquoise};
    padding: 20px;
`;

export const Button = styled.button`
    font-size: 20px;
    font-weight: 600;
    background: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: box-shadow 0.3s linear;
    padding: 6px 4px;
    
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.white};
    };
`;