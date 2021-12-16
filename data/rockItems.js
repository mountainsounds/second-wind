import atcGuide from '@/public/rock/atcGuide.jpeg';
import metoliousCams from '@/public/rock/metoliousCams.jpeg';
import sportivaShoes from '@/public/rock/sportivaShoes.jpeg';

import bdCams from '@/public/rock/bdCams.jpeg';
import eldelridCarabiner from '@/public/rock/eldelridCarabiner.jpeg';
import grindstone from '@/public/rock/grindstone.jpeg';
import grivelPlume from '@/public/rock/grivelPlume.jpeg';
import metoliousCamMed from '@/public/rock/metoliousCamsMed.jpeg';
import nutTool from '@/public/rock/nutTool.jpeg';
import tibloc from '@/public/rock/tibloc.jpeg';
import trangoKnife from '@/public/rock/trangoKnife.jpeg';
import tricams from '@/public/rock/tricams.jpeg';
import sportivaRock from '@/public/rock/sportivaRock.jpeg';
import petzlCarabiner from '@/public/rock/petzlCarabiner.jpeg';

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
        image: metoliousCams,
        link: 'https://www.metoliusclimbing.com/ultralight-master-cam.html',
        name: 'Metolious: Ultralight Master Cam',
        info: '1 size #00 and 1 #0',
        condition: 'Great',
        notes: 'Used around 10x or less.',
        salePrice: '$30 each',
        retailPrice: '$60',
        status: 'sold'
    },
    {
        image: bdCams,
        link: 'https://www.blackdiamondequipment.com/en_US/product/camalot-ultralight/',
        name: 'Black Diamond: Ultralight Camalots',
        info: "2 #2's, 1 #1, 2 # .75's",
        condition: 'Good',
        notes: '',
        salePrice: '$50 / each',
        retailPrice: '$110 - $120'
    },
    {
        image: eldelridCarabiner,
        link: 'https://www.edelrid.de/en/sports/standard-carabiner/nineteen-g.html',
        name: 'Edelrid Nineteen G',
        info: 'Quantity: 13, assorted colors',
        condition: 'Good',
        notes: 'The lightest carabiner in the world.',
        salePrice: '$5 each',
        retailPrice: '$12 each'
    },
    {
        image: petzlCarabiner,
        link: 'https://www.petzl.com/US/en/Sport/Carabiners-And-Quickdraws/Sm-D-(US)',
        name: "Petzl Sm'D",
        info: 'Quantity: 4.',
        condition: 'Good',
        notes: 'Lightweight, D-shaped lockiing carabiner',
        salePrice: '$7 each',
        retailPrice: '$18 each'
    },
    {
        image: grindstone,
        link: 'https://www.tensionclimbing.com/product/grindstone-mk2/',
        name: 'Tension Grindstone Hangboard',
        info: 'Original version.',
        condition: 'Good',
        notes: 'Comes with Metolious backboard ($20)',
        salePrice: '$70',
        retailPrice: '$150'
    },
    {
        image: grivelPlume,
        link: 'https://us.grivel.com/collections/biners-draws-and-slings/products/plume-nute-k3n',
        name: 'Grivel Plume Nut K3N',
        info: 'Quantity: 4',
        condition: 'Great',
        notes: '37g, lightest locking carabiner in the world.',
        salePrice: '$7',
        retailPrice: '$14'
    },
    {
        image: metoliousCamMed,
        link: 'https://www.metoliusclimbing.com/ultralight-master-cam.html',
        name: 'Metolious: Ultralight Master Cam',
        info: '1 size #2 and 1 #3',
        condition: 'Good',
        notes: '',
        salePrice: '$30 each',
        retailPrice: '$60',
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
        retailPrice: '$15'
    },
    {
        image: tibloc,
        link: 'https://www.petzl.com/US/en/Sport/Ascenders/TIBLOC',
        name: 'TIBLOC',
        info: 'Ultra-light emergency ascender',
        condition: 'Great / like new',
        notes: 'Original version',
        salePrice: '$20',
        retailPrice: '$45'
    },
    {
        image: trangoKnife,
        link: 'https://trango.com/products/piranha-knife',
        name: 'Trango Piranha Knife',
        info: 'Ultra-light emergency knife',
        condition: 'Great / like new',
        notes: '',
        salePrice: '$10',
        retailPrice: '$20'
    },
    {
        image: tricams,
        link: 'https://www.camp-usa.com/outdoor/product/rock-protection/tricam/',
        name: 'Assorted nuts and tricams with carabiner',
        info: '',
        condition: 'Good',
        notes: '',
        salePrice: '$25',
        retailPrice: '$70ish'
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