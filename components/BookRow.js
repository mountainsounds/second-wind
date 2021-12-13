
const BookRow = ({ data }) => {
    const { title, status, link, author, condition, sale, retail } = data;
    return (
        <tr className={status && 'bookSold'}>
            <td><a href={link} rel="noreferrer" target='_blank' ><span className='link'>{title}</span></a></td>
            <td>{author}</td>
            <td>{condition}</td>
            <td>{sale}</td>
            <td>{retail}</td>
        </tr>
    )
}

export default BookRow;
