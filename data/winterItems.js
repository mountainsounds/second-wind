import arcTeryxSoftShell from '@/public/winter/arcTeryxSoftShell.jpeg';
import atAR from '@/public/winter/atAR.jpg';
import atHardShell from '@/public/winter/atHardShell.jpeg';
import atSL from '@/public/winter/atSL.jpg';
import boots from '@/public/winter/boots.jpg';
import crocodile from '@/public/winter/crocodile.jpg';
import highcamp from '@/public/winter/highcamp.jpg';
import mammutSoftShell from '@/public/winter/mammutSoftShell.jpeg';
import marmotSleepingBag from '@/public/winter/marmotSleepingBag.jpeg';
import mh30 from '@/public/winter/mh30.JPG';
import mhPuffy from '@/public/winter/mhPuffy.jpeg';
import orHat from '@/public/winter/orHat.jpg';
import orPants from '@/public/winter/orPants.JPG';
import rockyMountain from '@/public/winter/rockyMountain.jpg';
import skiBoots from '@/public/winter/skiBoots.jpeg';
import skiHelmet from '@/public/winter/skiHelmet.jpeg';
import verglas from '@/public/winter/verglas.jpg';
import trekking from '@/public/winter/trekking.JPG';

const winterItems = [
    {
        image: boots,
        link: 'https://www.sportiva.com/nepal-cube-gtx.html',
        name: 'La Sportiva: Nepal Cube GTX',
        info: 'Mens, Size 47.',
        condition: 'New.',
        notes: 'Never worn, still have tags.',
        salePrice: '$350',
        retailPrice: '$600'
    },

    {
        image: highcamp,
        link: 'https://www.outdoorresearch.com/us/mens-highcamp-mitts-268057',
        name: 'Outdoor Research: Highcamp Mitts',
        info: 'Mens, size medium.',
        condition: 'Great.',
        notes: 'Like new, maybe used a couple of times.',
        salePrice: '$40',
        retailPrice: '$95'
    },
    {
        image: atSL,
        link: 'https://www.usedgear.arcteryx.com/p/arcteryx-phase-sl-bottom-mens-mens/16257?condition=Excellent',
        name: 'Arc Teryx: Phase SL Base Layer',
        info: 'Lightweight bottom base layer. Size large.',
        condition: 'Great',
        notes: '',
        salePrice: '$30',
        retailPrice: '$75'
    },
    {
        image: atAR,
        link: 'https://www.rei.com/product/110620/arcteryx-phase-ar-long-underwear-bottoms-mens',
        name: 'Arc Teryx: Phase AR Base Layer',
        info: 'Moderate weight base layer. Size large.',
        condition: 'Great.',
        notes: '',
        salePrice: '$30',
        retailPrice: '$100ish'
    },
    {
        image: rockyMountain,
        link: 'https://www.outdoorresearch.com/us/rocky-mountain-low-gaiters-243097',
        name: 'OR: Rocky Mountain Low Gaiters',
        info: 'Size Large / XL',
        condition: 'Good / great.',
        notes: '',
        salePrice: '$20',
        retailPrice: '$40',
        status: 'sold'
    },
    {
        image: verglas,
        link: 'https://www.outdoorresearch.com/us/mens-verglas-gaiters-243119',
        name: 'OR: Verglas Gaiters',
        info: 'Size small.',
        condition: 'Good / great.',
        notes: '',
        salePrice: '$30',
        retailPrice: '$70'
    },
    {
        image: crocodile,
        link: 'https://www.outdoorresearch.com/us/mens-crocodile-gaiters-243118',
        name: 'OR: Crocodile Gaiters',
        info: 'Mens, size large.',
        condition: 'Good / great.',
        notes: '',
        salePrice: '$40',
        retailPrice: '$100',
        status: 'sold'
    },
    {
        image: orHat,
        link: 'https://www.rei.com/product/619697/outdoor-research-windstopper-alpine-hat',
        name: 'OR: Wind Stopper Alpine Hat',
        info: 'Size large.',
        condition: 'Good',
        notes: '',
        salePrice: '$5',
        retailPrice: '$34'
    },
    {
        image: atHardShell,
        link: 'https://www.outdoorgearlab.com/reviews/clothing-mens/hardshell-jacket/arcteryx-alpha-fl',
        name: 'Arc Teryx: Alpha FL Jacket',
        info: 'Goretex Alpine Shell Jacket. Size large.',
        condition: 'Good / great',
        notes: '',
        salePrice: '$200',
        retailPrice: '$475'
    },
    {
        image: arcTeryxSoftShell,
        link: 'https://www.rei.com/product/895661/arcteryx-psiphon-fl-hoodie-mens',
        name: 'Arc Teryx: Psiphon FL Jacket',
        info: 'Alpine or multi-pitch rock, softshell jacket. Size large.',
        condition: 'Good / great',
        notes: '',
        salePrice: '$90',
        retailPrice: '$240'
    },
    {
        image: mammutSoftShell,
        link: 'https://www.campsaver.com/mammut-ultimate-nordpfeiler-jacket-mens.html',
        name: 'Mammut: Nordpfeiler Jacket',
        info: 'Alpine / Ice Climbing softshell jacket. Size large.',
        condition: 'Great.',
        notes: '',
        salePrice: '$100',
        retailPrice: '$350'
    },
    {
        image: orPants,
        link: 'https://www.outdoorresearch.com/us/womens-cirque-ii-pants-271433',
        name: 'Outdoor Research Womens Cirque Pants',
        info: 'Softshell pants, size Small. ',
        condition: 'Great, like new.',
        notes: '',
        salePrice: '$75',
        retailPrice: '$150'
    },
    {
        image: skiHelmet,
        link: 'https://www.giro.com/p/jackson-mips-snow-helmet/200000001600000049.html',
        name: 'Giro: Jackson MIPS Ski Helmet',
        info: 'Adult, large ski helmet (2019).',
        condition: 'Great.',
        notes: 'A few mmarks, otherwise in like new condition. Used 6x.',
        salePrice: '$100',
        retailPrice: '$180'
    },
    {
        image: skiBoots,
        link: 'https://www.head.com/en_US/edge-lyt-100-24.html',
        name: 'Head: Edge LYT 100 Ski Boots',
        info: 'Black / Red color, size 28.5. My street shoe size is 13.',
        condition: 'Great.',
        notes: 'Used 6x.',
        salePrice: '$300',
        retailPrice: '$550'
    },
    {
        image: mhPuffy,
        link: 'https://www.mountainhardwear.com/p/mens-phantom-parka-1851251.html',
        name: 'Mountain Hardwear: Phantom Parka',
        info: 'Hooded, down winter belay jacket. Size large.',
        condition: 'Good',
        notes: `1 small hole taped over (see photo), and 1 small
        darkish stain that may come out with the right know how.`,
        salePrice: '$100',
        retailPrice: '$400'
    },
    {
        image: marmotSleepingBag,
        link: 'https://www.rei.com/product/828312/marmot-plasma-40-sleeping-bag',
        name: 'Marmot: Plasma Sleeping Bag',
        info: '40 degree sleeping bag.',
        condition: 'Great',
        notes: 'Mostly used for van camping.',
        salePrice: '$150',
        retailPrice: '$400'
    },
    {
        image: mh30,
        link: 'https://www.mountainhardwear.com/p/phantom-30f%2F-1c-reg-1829401.html?dwvar_1829401_color=675&pos=5',
        name: 'Mountain Hardware Phantom 32F',
        info: '32 degree, older model sleeping bag',
        condition: 'Great',
        notes: 'Mostly used for van camping.',
        salePrice: '$150',
        retailPrice: '$400'
    },
    {
        image: trekking,
        link: 'https://www.blackdiamondequipment.com/en_US/product/alpine-carbon-z-trekking-poles/',
        name: 'Black Diamond Alpine Carbon Z Trekking Poles',
        info: '130cm',
        condition: 'Great, like new',
        notes: '',
        salePrice: '$100',
        retailPrice: '$200'
    },


]

export default winterItems;