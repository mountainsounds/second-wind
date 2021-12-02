import Nav from '@/components/navigation/Nav';
import vanPhotos from '@/data/vanInfo';
import Card from '@/components/cards/Card';

export default function Van() {

    return (
        <section id='vanPage' className="hero is-info">
            <Nav />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div id='vanInfo' className="">
                        <h1 className="title"> 2019 Ford Transit Connect </h1>
                        <p>In addition to the gear I am selling a simply, but functionally converted cargo van. <br>
                        </br> Smaller than a sprinter, it is a great size for everyday driving, as well as weekend and multi-week trips.  </p>
                        <p>It has spent all but the last few months in Southern California so rust free.</p>

                    </div>
                </div>
            </div>
            <div className="cardListContainer is-flex">
                {vanPhotos.map((data, id) => <Card data={data} id={id} />)}
            </div>

        </section >
    )
}
