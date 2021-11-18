import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Modal from "./Modal";
import { useState } from "react";

const Card = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalClick = () => setIsModalActive(!isModalActive);
    return (
        <div className='cardWrapper'>
            < div className="card" >
                <CardImage handleModalClick={handleModalClick} />
                <CardContent handleModalClick={handleModalClick} />
            </div >
            <Modal isModalActive={isModalActive} handleModalClick={handleModalClick} />
        </div>
    )
}
export default Card;
