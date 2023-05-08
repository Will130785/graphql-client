import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery)
  const displayBooks = () => {
    if (loading) {
      return <div>Loading Books</div>
    } else {
      return data.books.map((book, bookIndex) => {
        return <li key={`book-${bookIndex}`}>{book.name}</li>
      })
    }
  }
  return (
    <div>
      <ul id='book-list'>
        {displayBooks()}
      </ul>
    </div>
  )
}

export default BookList