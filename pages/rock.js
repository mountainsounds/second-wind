import Nav from '../components/nav';
import { useState } from 'react';

export default function Rock() {
    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalClick = (clickLocation) => {
        if (isModalActive) setIsModalActive(false);
        else if (clickLocation === 'button') setIsModalActive(true);
    }
    return (
        <section onClick={() => handleModalClick('body')} id='rockPage' className="hero is-info is-fullheight">
            <Nav />
            <section className="container">
                <div className="columns features">
                    <div className="column is-4">
                        <div className="card is-shady">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" className="modal-button" data-target="modal-image2" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Click on image above</h4>
                                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                    <span onClick={() => { handleModalClick('button') }} className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="modal-image2" className={`modal modal-fx-3dSlit ${isModalActive && 'is-active'}`}>
                <div className="modal-background"></div>
                <div className="modal-content is-huge is-image">
                    {/* <!-- content --> */}
                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
                    {/* <!--end content--> */}
                </div>
                <button onClick={() => handleModalClick('button')} className="modal-close is-large" aria-label="close"></button>
            </div>

        </section >
    )
}

