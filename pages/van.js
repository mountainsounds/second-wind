import Nav from '@/components/navigation/Nav';
import vanPhotos from '@/data/vanInfo';
import Card from '@/components/cards/Card';
import vanSticker from '@/public/vanSticker.jpg';
import Image from 'next/image';

export default function Van() {

    return (
        <section id='vanPage' className="hero is-info">
            <Nav />
            <div className="hero-body">
                <div className="container">
                    <div id='vanInfo' className="">
                        <h1 className="title has-text-centered"> 2019 Ford Transit Connect </h1>
                        <h2 className="has-text-centered">Price: $27,000</h2>
                        <p>A much beloved converted cargo van with an eye to minimalism and function.
                            Smaller than a sprinter, it is a great size for everyday driving,
                            as well as weekend and multi-week trips. The price includes all the additional ammenties listed below. </p>
                        <p>It has spent all but the last few months in Southern California so rust free.
                            Please see the window sticker for all the original specs.</p>
                        <br></br><br></br>
                        <h3><b>Additional info & features:</b></h3>
                        <p>Mileage: 37,000</p>
                        <p>Dometic CFX3 55IM: A powered cooler / fridge (retail value: $1200), includes an insulated cover ($100). </p>
                        <p>Goal Zero Battery: This powers the fridge and any other small electronics. It can be charged both from a home outlet as well as the car while driving.</p>
                        <p>Insulation: 1 inch in strategic location in cargo area including ceiling, sides, and on removeable window coverings.</p>
                        <p>Weather tech side window deflectors: $120 retail value. </p>
                        <p>Weather tech front windshield SunShade: $60.</p>
                        <p>Therm-a-rest LuxuryMap Sleeping Pad: $190.</p>


                    </div>
                </div>
            </div>
            <div id='windowSticker'>
                <Image
                    src={vanSticker}
                    alt='window sticker for van'
                />
            </div>
            <div className="cardListContainer is-flex">
                {vanPhotos.map((data, id) => <Card data={data} key={id} />)}
            </div>

        </section >
    )
}
