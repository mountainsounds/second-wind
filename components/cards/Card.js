import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { useState } from "react";
import VanCardContent from "./VanCardContent";

const Card = ({ data }) => {
    const { image, status, page, ...cardData } = data;
    return (
        <div className='cardWrapper'>
            < div className={`card ${status ? 'sold' : ''}`} >
                <CardImage image={image} />
                {page === 'van' ? <VanCardContent cardData={cardData} /> :
                    <CardContent cardData={cardData} />}
            </div >
        </div>
    )
}
export default Card;

