import { useSelector } from "react-redux";
import { selectGlobalCategories } from "../../../flashcardsSlice";
import { Wrapper, Tile, CategoryName } from "./styled";

const CategoryTiles = () => {
    const globalCategories = useSelector(selectGlobalCategories);

    return (
        <Wrapper>
            {globalCategories.map((category, index) => (
                <Tile key={index}>
                    <CategoryName>{category}</CategoryName>
                </Tile>
            ))}
        </Wrapper>
    );
};

export default CategoryTiles;