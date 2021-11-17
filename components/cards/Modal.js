
const Modal = ({ isModalActive, handleModalClick }) => {
    return (
        <div id="modal-image2" className={`modal modal-fx-3dSlit ${isModalActive && 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content is-huge is-image">
                {/* <!-- content --> */}
                <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
                {/* <!--end content--> */}
            </div>
            <button onClick={() => handleModalClick('button')} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default Modal;