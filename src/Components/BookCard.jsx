import React from 'react'
import book from '../assets/book.jpeg';
import { Link } from 'react-router-dom';


export default function BookCard({b}) {
  return (
    <Link to={`/books/${b.id}`}>
      <div className='p-4 border-2 min-h-[420px]'>
        <img src={book}></img>
        <div className='text-center space-y-2 mt-3'>
            <p>{b.title}</p>
            <p>{b.description}</p>
            <div  className='flex flex-wrap'>
                {b.categories.map(c=>(
                <span key={c} className='m-1 p-1 text-white rounded-full bg-purple-800 text-sm'>{c}</span>
                ))}
            </div>
        </div>
    </div>
    </Link>
  )
}
