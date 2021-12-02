
const VanCardContent = ({ cardData }) => {
    const { title, info } = cardData;
    { if (!title && !info) return <div></div> }
    return (
        <div className="card-content">
            <div className="content">
                {title && <h4>{title}</h4>}
                {info && <p> {info} </p>}
            </div>
        </div>
    )
}

export default VanCardContent;
