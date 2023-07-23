import React from 'react'
import BookCard from './BookCard';
import useFetch from '../hooks/usefetch';
import { useLocation } from 'react-router-dom';

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get('search');

  let {data : books, loading, error} = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);
  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* (!!) means boolean value of data var  */}
      {/* {!!books && (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
        {books.map((b)=>(
          <BookCard b={b} key={b.id}></BookCard>
        ))}
      </div>
      )} */}
      {/* {!books.length && <p>No Data</p>} */}
      {!books || !books.length ? (<p className='text-center text-gray-500 text-xl p-5'>No Search Data...</p>) : (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
        {books.map((b)=>(
          <BookCard b={b} key={b.id}></BookCard>
        ))}
      </div>
      )}
    </div>
  )
}
