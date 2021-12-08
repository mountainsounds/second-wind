import Nav from '@/components/navigation/Nav';
import BooksTable from 'components/BooksTable';
import books from '@/public/books.jpg';
import Image from 'next/image';
export default function Books() {

    return (
        <section id='booksPage' className="hero is-info">
            <Nav />
            <section className="container">
                <Image
                    src={books}
                    alt='books on a shelf'
                    layout='responsive'
                />
                <BooksTable />
            </section>
        </section >
    )
}
