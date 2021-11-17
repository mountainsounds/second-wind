
const CardImage = ({ handleModalClick }) => {
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img onClick={handleModalClick} src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" className="modal-button" data-target="modal-image2" />
            </figure>
        </div>
    )
}

export default CardImage;