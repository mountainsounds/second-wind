import Nav from '../components/nav';
import Card from '../components/cards/Card';

export default function Books() {

    return (
        <section id='booksPage' className="hero is-info is-fullheight">
            <Nav />
            <section className="container">
                <Card />
            </section>

        </section >
    )
}
