import Nav from '@/components/navigation/Nav';
import Card from '@/components/cards/Card';
import winterItems from 'data/winterItems';

export default function Winter() {

    return (
        <section id='winterPage' className="hero is-info">
            <Nav />
            <div className="cardListContainer is-flex">
                {winterItems.map((data, i) => <Card key={i} data={data} />)}
            </div>
        </section >
    )
}
