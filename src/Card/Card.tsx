import { useState } from 'react';
import './Card.css';
import { CardType } from '../utils';

export default function Card(props: { data: CardType }) {
    const [showing, setShowing] = useState("front")
    const [clickable, setClickable] = useState(true)


    const handleClick = () => {
        clickable && setShowing("back")
    }

    return (
        <div className="Card" >
            <div className={`card-front ${showing === "back" ? "hidden" : ""}`} onClick={handleClick}>
                <p className="card-value">{props.data.value}</p>
            </div>
            <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
                <p className="card-question">{props.data.question}</p>
            </div>
        </div>
    )

}
