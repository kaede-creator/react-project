import React from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../functions/Book'

const BookDetail = (props) => {
  const params = useParams()
  // 10進数に置き換える↓
  const book = getBook(parseInt(params.id, 10))
  return (
    <>
     <p>タイトル: {book.title} </p>
     <p>{book.comment} </p>
     {/* <button onClick={() => this.props.history.goBack()}>戻る</button> */}
    </>
  )
}

export default BookDetail
