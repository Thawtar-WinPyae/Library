import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/usefetch';
import bookimg from '../assets/book.jpeg'

export default function Details() {
    let {id} = useParams();
    let url = `http://localhost:3000/books/${id}`;
    let {data : books, loading, error} = useFetch(url);

    let navigate = useNavigate();

    useEffect(() => {
        if(error){
            setTimeout(()=>{
                navigate('/');
            },2000)
        }
    }, [error,navigate])//return redirect

  return (
    <div className='Details'>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {books && (
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={bookimg} className='w-[80%]'></img>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>{books.title}</h1>
                        <div className='space-x-2'>
                            {
                                books.categories.map((c)=>(
                                    <span className='bg-blue-500 text-white rounded-full text-xs px-2 py-1' key={c}>
                                        {c}
                                    </span>
                                ))
                            }
                        </div>
                        <p>{books.description}</p>
                    </div>
                </div>
            )}
        </div>
  );
}
