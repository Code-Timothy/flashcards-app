import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Counter = styled.p`
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Flashcard = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isFlipped" && prop !== "positionX",
})`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.brinkPink};
    transform-style: preserve-3d;
    transition: transform 0.3s;
    transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
    
    @media(max-width: 767px){
        width: 200px;
        height: 150px;
    };

    ${({ $dragging, positionX, theme }) => $dragging && css`
        background: 
            ${positionX > 5 ? theme.colors.pastelGreen :
            positionX < -5 ? theme.colors.brightSun
                : theme.colors.brinkPink};
    `};
`;

export const FlashcardContent = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== "isFlipped",
})`
    animation: ${({ isFlipped }) => isFlipped ? css`${spin} 0.1s forwards` : css`${spin} 0.1s backwards`};
    text-align: center;
    font-size: 30px;
    font-weight: 600px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding: 20px;
`;

export const Button = styled.button`
    padding: 15px 30px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.easternBlue};
    border: none;
    border-radius: 4px;
    transition: transform 1s;

    &:hover{
        cursor: pointer;
        opacity: 90%;
        transform: scale(1.05);
    };
`;

const spin = keyframes`
    0%
    {
        transform: rotateY(0deg);
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
`;