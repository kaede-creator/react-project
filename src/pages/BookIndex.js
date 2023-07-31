import { getBooks } from '../functions/Book'
import { Link } from 'react-router-dom'

const BookIndex = () => {
  const books = getBooks()

  return (<>
  <div className='bookIndex_wrap fadeIn'>
    <h1 className='mb-6'>最近読んだ小説一覧</h1>
    <p>「作品名は聞いたことがあるのに、読んだことがないな？」と思い至り、最近読み始めるようになりました。</p>
    <ul className='my-4 list'>
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