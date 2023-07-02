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
     <p className='mb-2'>タイトル: {book.title} </p>
     <p style={{whiteSpace: 'pre-line'}}>{book.comment} </p>
     {/* <button onClick={() => this.props.history.goBack()}>戻る</button> */}
    </>
  )
}


export default BookDetail
