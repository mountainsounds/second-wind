
const BookRow = ({ data }) => {
    const { title, author, condition, sale, retail } = data;
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{condition}</td>
            <td>{sale}</td>
            <td>{retail}</td>
        </tr>
    )
}

export default BookRow;
