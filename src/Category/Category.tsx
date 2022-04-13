import { CardType } from '../utils';
import Card from '../Card/Card';
import "./Category.css"


function Category(props: { name: string, cards: [CardType] }) {
    return (
        <div className="Category">
            <div className="title-card">
                <h3 className="category-title">{props.name}</h3>
            </div>
            {props.cards.map(card => {
                return (<Card data={card} />)
            })}
        </div>
    )
}


export default Category