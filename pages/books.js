import Nav from '@/components/navigation/Nav';
import BooksTable from 'components/BooksTable';
import books from '@/public/books.JPG';
import Image from 'next/image';
export default function Books() {

    return (
        <section id='booksPage' className="hero is-info">
            <Nav />
            <div className="container">
                <Image
                    src={books}
                    alt='books on a shelf'
                    layout='responsive'
                />
                <BooksTable />
            </div>
        </section >
    )
}
