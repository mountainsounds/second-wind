import Image from 'next/image';

const CardImage = ({ image }) => {
    return (
        <Image
            src={image}
            alt='Picture of item for sale.'
            layout='responsive'
        />
    )
}

export default CardImage;