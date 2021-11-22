import Image from 'next/image';

const CardImage = ({ image }) => {
    return (
        <Image
            src={image}
            alt='Picture of the author'
            layout='responsive'
        />
    )
}

export default CardImage;