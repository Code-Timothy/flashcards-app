import { NavLink } from "react-router-dom";
import { StyledNavigation, Button } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <NavLink to="/create-flashcards"><Button>Create Flashcards</Button></NavLink>
        <NavLink to="/your-flashcards"><Button>Your Flashcards</Button></NavLink>
        <NavLink to="/practise"><Button>Practice</Button></NavLink>
    </StyledNavigation >
);

export default Navigation;