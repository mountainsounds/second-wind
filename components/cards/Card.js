import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { useState } from "react";
import VanCardContent from "./VanCardContent";

const Card = ({ data }) => {
    const { image, page, ...cardData } = data;
    return (
        <div className='cardWrapper'>
            < div className="card" >
                <CardImage image={image} />
                {page === 'van' ? <VanCardContent cardData={cardData} /> :
                    <CardContent cardData={cardData} />}
            </div >
        </div>
    )
}
export default Card;

