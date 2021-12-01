import { training, literature, guidebooks } from "data/bookItems";
import BookRow from "./BookRow";

const BooksTable = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Condition</th>
                    <th>Sale Price</th>
                    <th>Retail Price</th>
                </tr>
            </thead>
            <tbody>
                <tr className='is-selected'>
                    <td colSpan='5'>Instructional & Training</td>
                </tr>
                {training.map((data, i) => <BookRow key={i} data={data} />)}

                <tr className='is-selected'>
                    <td colSpan='5'>Climbing & Mountaineering Literature</td>
                </tr>
                {literature.map((data, i) => <BookRow key={i} data={data} />)}
                <tr className='is-selected'>
                    <td colSpan='5'>Guidebooks</td>
                </tr>
                {guidebooks.map((data, i) => <BookRow key={i} data={data} />)}
            </tbody>
        </table>
    )
}
export default BooksTable;
