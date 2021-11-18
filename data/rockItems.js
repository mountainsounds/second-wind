import atcGuide from '@/public/rock/atcGuide.jpeg';
import dmm from '@/public/rock/dmm.jpeg';
import metoliousCams from '@/public/rock/metoliousCams.jpeg';
import sportivaShoes from '@/public/rock/sportivaShoes.jpeg';

const rockItems = [
    {
        image: sportivaShoes,
        name: 'La Sportiva: TX3 Approach Shoes',
        info: 'Mens, 13.5.',
        condition: 'New.',
        notes: 'Never worn.',
        salePrice: '$60',
        retailPrice: '$135'
    }, {
        image: metoliousCams,
        name: 'Metolious: Ultralight Master Cam',
        info: 'Purple, size #0.',
        condition: 'Great',
        notes: 'Used around 10x or less.',
        salePrice: '$30',
        retailPrice: '$60'
    },
    {
        image: metoliousCams,
        name: 'Metolious: Ultralight Master Cam',
        info: 'Gray, size #00.',
        condition: 'Great',
        notes: 'Used around 10x or less.',
        salePrice: '$30',
        retailPrice: '$60'
    },
    {
        image: atcGuide,
        name: 'Black Diamond: ATC Guide',
        info: 'Green',
        condition: 'Good',
        notes: '',
        salePrice: '$15',
        retailPrice: '$30'
    },
    {
        image: dmm,
        name: 'DMM: Phantom Carabiner',
        info: 'Locking, screwgate carabiner.',
        condition: 'Good.',
        notes: 'Only cosmetic wear, may be an older model.',
        salePrice: '$5',
        retailPrice: '$15'
    }
]

export default rockItems;