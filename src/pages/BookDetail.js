import React from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../functions/Book'

const BookDetail = (props) => {
  const params = useParams()
  // 10進数に置き換える↓
  const book = getBook(parseInt(params.id, 10))
  const comment = book.comment
  // const text = comment.replace(/\n/g, '<br>')
  return (
    <>
     <p className='mb-2'>題名: {book.title} </p>
     <p style={{whiteSpace: 'pre-line'}}>{book.comment} </p>
     <a href='/react-project'>TOPへ</a>
     {/* <button onClick={() => this.props.history.goBack()}>戻る</button> */}
    </>
  )
}

<<<<<<< HEAD

=======
>>>>>>> 79a464740488d3dc22b7cf8a13a129c0735cbef2
export default BookDetail
