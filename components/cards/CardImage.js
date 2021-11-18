import Image from 'next/image';

const CardImage = ({ handleModalClick, image }) => {
    return (
        <Image
            src={image}
            alt='Picture of the author'
            layout='responsive'
            onClick={handleModalClick}
        />
    )
}

export default CardImage;