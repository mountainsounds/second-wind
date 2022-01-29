import atcGuide from '@/public/rock/atcGuide.jpeg';
import bdCams from '@/public/rock/bdCams.jpeg';
import eldelridCarabiner from '@/public/rock/eldelridCarabiner.jpeg';
import sportivaRock from '@/public/rock/sportivaRock.jpeg';

const rockItems = [
    {
        image: atcGuide,
        link: 'https://www.blackdiamondequipment.com/en_US/product/atc-guide-belay-rappel-device/',
        name: 'Black Diamond: ATC Guide',
        info: 'Green',
        condition: 'Good',
        notes: '',
        salePrice: '$15',
        retailPrice: '$30'
    },
    {
        image: bdCams,
        link: 'https://www.blackdiamondequipment.com/en_US/product/camalot-ultralight/',
        name: 'Black Diamond: Ultralight Camalots',
        info: "2 #2's",
        condition: 'Good',
        notes: '',
        salePrice: '$50 / each',
        retailPrice: '$120',
        status: 'sold'
    },
    {
        image: eldelridCarabiner,
        link: 'https://www.edelrid.de/en/sports/standard-carabiner/nineteen-g.html',
        name: 'Edelrid Nineteen G',
        info: 'Quantity: 11, assorted colors',
        condition: 'Good',
        notes: 'The lightest carabiner in the world.',
        salePrice: '$5 each',
        retailPrice: '$12 each',
        status: 'sold'
    },
    {
        image: sportivaRock,
        link: 'https://www.sportiva.com/tarantulace.html',
        name: 'La Sportiva Tarantulace',
        info: 'Size: 44.5 (US: 11)',
        condition: 'Great',
        notes: '',
        salePrice: '$40',
        retailPrice: '$85'
    }
]

export default rockItems;