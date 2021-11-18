import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Modal from "./Modal";
import { useState } from "react";

const Card = ({ data }) => {
    const { image, ...cardData } = data;
    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalClick = () => setIsModalActive(!isModalActive);
    return (
        <div className='cardWrapper'>
            < div className="card" >
                <CardImage image={image} handleModalClick={handleModalClick} />
                <CardContent cardData={cardData} />
            </div >
            <Modal image={image} isModalActive={isModalActive} handleModalClick={handleModalClick} />
        </div>
    )
}
export default Card;

