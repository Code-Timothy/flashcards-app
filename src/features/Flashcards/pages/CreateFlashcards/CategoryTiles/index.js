import { useSelector, useDispatch } from "react-redux";
import { selectGlobalCategories, setCurrentCategory } from "../../../flashcardsSlice";
import { Wrapper, Tile, CategoryName } from "./styled";

const CategoryTiles = () => {
    const globalCategories = useSelector(selectGlobalCategories);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            {globalCategories.map((category, index) => (
                <Tile
                    key={index}
                    onClick={() => dispatch(setCurrentCategory(category))}>
                    <CategoryName>{category}</CategoryName>
                </Tile>
            ))}
        </Wrapper>
    );
};

export default CategoryTiles;