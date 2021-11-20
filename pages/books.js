import Nav from '@/components/navigation/Nav';
import BooksTable from 'components/BooksTable';

export default function Books() {

    return (
        <section id='booksPage' className="hero is-info">
            <Nav />
            <section className="container">
                <BooksTable />
            </section>

        </section >
    )
}
