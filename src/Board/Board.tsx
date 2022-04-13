import { CategoryType, CardType } from '../utils';
import Category from "../Category/Category"
import "./Board.css"

export default function Board(props: { categories: CategoryType }) {
    const categoryNames = Object.keys(props.categories)
    return (
        <div className="Board">
            {categoryNames.map((categoryName) => {
                const categoryCards = props.categories[categoryName]
                return (<Category name={categoryName} cards={categoryCards} />)
            })}
        </div>
    )

}
