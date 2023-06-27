import { getBooks } from '../functions/Book'
import { Link } from 'react-router-dom'

const BookIndex = () => {
  const books = getBooks()

  return (<>
  <div className='bookIndex_wrap'>
    <p>最近読んだ小説一覧です。</p>
    <ul className='my-4'>
        { books.map( book => (
          <li className='my-2'>
            <Link key={book.id} to={`/book-list/${book.id}`}>{book.title}</Link>
            </li>
        ))}
      </ul>
  </div>
  </>)
}


export default BookIndex