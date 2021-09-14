import React from 'react'
import { Header } from '../components/Header'
import { useFetch } from '../hooks/useFetch'

type BookProps = {
  id: number,
  title: string
  author: string
}
const Home: React.FC = () => {
  const { data } = useFetch('/books')
  if (!data) return <h1>Loading..</h1>
  return (
    <>
      <Header title="With Styled Components and Typescript" />

      
        { data.map((book: BookProps) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            </div>
        ))}
        
    </>
  )
}

export default Home
