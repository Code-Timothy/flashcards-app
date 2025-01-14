import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    };

    *, ::before, ::after{
        box-sizing: inherit;
    };

    body{
        font-family: "Nunito", serif;
        background: ${({ theme }) => theme.colors.tuna};
    };
`;