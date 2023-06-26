import { getBooks } from '../functions/Book'
import { Link } from 'react-router-dom'

const BookIndex = () => {
  const books = getBooks()

  return (<>
    <ul>
      { books.map( book => (
        <li><Link key={book.id} to={`/book-list/${book.id}`}>{book.title}</Link></li>
      ))}
    </ul>
  </>)
}


export default BookIndex