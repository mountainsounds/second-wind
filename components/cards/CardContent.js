
const CardContent = ({ handleModalClick }) => {
    return (
        <div className="card-content">
            <div className="content">
                <h4>Click on image above</h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <span onClick={() => { handleModalClick('button') }} className="button is-link modal-button" data-target="modal-image2">Image modal</span>
            </div>
        </div>
    )
}

export default CardContent;