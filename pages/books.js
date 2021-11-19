import Nav from '@/components/navigation/Nav';
import Card from '@/components/cards/Card';
import BooksTable from 'components/BooksTable';

export default function Books() {

    return (
        <section id='booksPage' className="hero is-info is-fullheight">
            <Nav />
            <section className="container">
                <BooksTable />
            </section>

        </section >
    )
}
