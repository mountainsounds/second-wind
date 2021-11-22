import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { useState } from "react";

const Card = ({ data }) => {
    const { image, ...cardData } = data;
    return (
        <div className='cardWrapper'>
            < div className="card" >
                <CardImage image={image} />
                <CardContent cardData={cardData} />
            </div >
        </div>
    )
}
export default Card;

