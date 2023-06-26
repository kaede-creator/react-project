import React from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../functions/Book'

const BookDetail = () => {
  const params = useParams()
  // 10進数に置き換える↓
  const book = getBook(parseInt(params.id, 10))
  return (
    <>
     id: {book.id} <br />
     title: {book.title} 
    </>
  )
}

export default BookDetail
