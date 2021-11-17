import CardImage from "./CardImage";
import CardContent from "./CardContent";
import Modal from "./Modal";
import { useState } from "react";

const Card = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalClick = () => setIsModalActive(!isModalActive);
    return (
        <>
            <div className="columns features">
                <div className="column is-4">
                    <div className="card is-shady">
                        <CardImage handleModalClick={handleModalClick} />
                        <CardContent handleModalClick={handleModalClick} />
                    </div>
                </div>
            </div>
            <Modal isModalActive={isModalActive} handleModalClick={handleModalClick} />
        </>
    )
}

export default Card;