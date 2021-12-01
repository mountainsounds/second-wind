
const CardContent = ({ cardData }) => {
    const { name, link, info, condition, notes, salePrice, retailPrice } = cardData;
    return (
        <div className="card-content">
            <div className="content">
                <a href={link} target='_blank' rel="noreferrer" ><h4>{name}</h4></a>
                {info && <p>Info: {info}</p>}
                <p>Condition: {condition}</p>
                {notes && <p>Notes: {notes}</p>}
                <div className='priceContainer'>
                    <span>Sale: {salePrice}</span>
                    <span>Retail: <s>{retailPrice}</s></span>
                </div>
            </div>
        </div>
    )
}

export default CardContent;
