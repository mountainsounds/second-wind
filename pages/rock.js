import Nav from '../components/nav';
import { useState } from 'react';
import Card from '../components/cards/Card';

export default function Rock() {
    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalClick = (clickLocation) => {
        if (isModalActive) setIsModalActive(false);
        else if (clickLocation === 'button' || clickLocation === 'image') {
            setIsModalActive(true);
        }
    }
    return (
        <section onClick={() => handleModalClick('body')} id='rockPage' className="hero is-info is-fullheight">
            <Nav />
            <section className="container">
                <Card handleModalClick={handleModalClick} isModalActive={isModalActive} />
            </section>


        </section >
    )
}

