import Nav from '@/components/navigation/Nav';
import vanPhotos from '@/data/vanInfo';
import Card from '@/components/cards/Card';
import Image from 'next/image';

export default function Van() {

    return (
        <section id='vanPage' className="hero is-info">
            <Nav />
            <div className="hero-body">
                <div className="container">
                    <div id='vanInfo' className="column is-6 is-offset-3">
                        <p>The following items belonged to a 2019 Ford Transit Connect Van</p>
                        <p>The Goal Zero battery pack, powered the fridge and other small electronics. It can be charged either by a wall outlet, or through a vehicles
                            auxiliary power outlet (cigarette lighter) while driving.</p>
                    </div>
                </div>
            </div>

            <div className="cardListContainer is-flex">
                {vanPhotos.map((data, id) => <Card data={data} key={id} />)}
            </div>

        </section >
    )
}

