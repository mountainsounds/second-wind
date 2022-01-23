import atcGuide from '@/public/rock/atcGuide.jpeg';
import bdCams from '@/public/rock/bdCams.jpeg';
import eldelridCarabiner from '@/public/rock/eldelridCarabiner.jpeg';
import grivelPlume from '@/public/rock/grivelPlume.jpeg';
import nutTool from '@/public/rock/nutTool.jpeg';
import tibloc from '@/public/rock/tibloc.jpeg';
import trangoKnife from '@/public/rock/trangoKnife.jpeg';
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
        image: grivelPlume,
        link: 'https://us.grivel.com/collections/biners-draws-and-slings/products/plume-nute-k3n',
        name: 'Grivel Plume Nut K3N',
        info: 'Quantity: 4',
        condition: 'Great',
        notes: '37g, lightest locking carabiner in the world.',
        salePrice: '$7',
        retailPrice: '$14',
        status: 'sold'
    },
    {
        image: nutTool,
        link: 'https://www.metoliusclimbing.com/torque-nut-tool.html',
        name: 'Metolious Torque Nut Tool',
        info: '',
        condition: 'Good',
        notes: '',
        salePrice: '$5',
        retailPrice: '$15',
        status: 'sold'
    },
    {
        image: tibloc,
        link: 'https://www.petzl.com/US/en/Sport/Ascenders/TIBLOC',
        name: 'TIBLOC',
        info: 'Ultra-light emergency ascender',
        condition: 'Great / like new',
        notes: 'Original version',
        salePrice: '$20',
        retailPrice: '$45',
        status: 'sold'
    },
    {
        image: trangoKnife,
        link: 'https://trango.com/products/piranha-knife',
        name: 'Trango Piranha Knife',
        info: 'Ultra-light emergency knife',
        condition: 'Great / like new',
        notes: '',
        salePrice: '$10',
        retailPrice: '$20',
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