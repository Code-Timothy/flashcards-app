import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: ${({ theme }) => theme.colors.steelGray};
    padding: 20px;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.steelGray};
    color: ${({ theme }) => theme.colors.chatelle};
    border: none;
    transition: box-shadow 0.3s linear;
    
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.portage};
    };
`;