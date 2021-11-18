
const CardContent = ({ cardData }) => {
    const { name, info, condition, notes, salePrice, retailPrice } = cardData;
    return (
        <div className="card-content">
            <div className="content">
                <h4>{name}</h4>
                <p>Info: {info}</p>
                <p>Condition: {condition}</p>
                <p>Notes: {notes}</p>
                <div className='priceContainer'>
                    <span>Sale: {salePrice}</span>
                    <span>Retail: <s>{retailPrice}</s></span>
                </div>
            </div>
        </div>
    )
}

export default CardContent;
