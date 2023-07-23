import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/usefetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  let [title , setTitle] = useState('');
  let [description , setDescription] = useState('');
  let [newCategory , setNewCategory] = useState('');
  let [categories , setCategories] = useState([]);

  let {setPostData, data : book, loading,setLoading}= useFetch('http://localhost:3000/books','POST')

  let addCategory =  (e)=>{
    if(newCategory && categories.includes(newCategory)){
      setNewCategory('');
      return;
    }
    setCategories(prev => [newCategory,...prev]);
    setNewCategory('');
  }

  let addBook = (e) =>{
    e.preventDefault();
    let data = {
      title,
      description,
      categories
    }
    setPostData(data);
  }
  
  let navigate = useNavigate();
  useEffect(()=>{
    setLoading(false);
    if(book){
      navigate('/')
    }
  },[book])
  
  return (
    <>
  <div>

      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
  
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
            Book Title
          </label>
          <input value={title} onChange={e=> setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" placeholder="Enter Book Title"/>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
            Book Description
          </label>
          <textarea value={description} onChange={e=> setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Enter Book Description"/>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-text">
            Book Category
          </label>
          <div className='flex items-center space-x-2'>
            <input value={newCategory} onChange={e=> setNewCategory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" type="text" placeholder="Enter Book Category"/>
            <button type="button" onClick={addCategory} className='bg-primary p-1 rounded mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className='space-y-4'>
            <div className='space-x-2'>
              {
                categories.map((c)=>(
                  <span className='bg-primary text-white rounded-full text-xs px-2 py-1' key={c}>
                    {c}
                    </span>
                  ))
              }
            </div>
          </div>
      </div>

      <button className='text-white bg-primary p-3 rounded-2xl flex items-center justify-center gap-1 w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
              { loading && "Loading"}
          {!loading &&<span className='hidden md:block' >Create Book</span>}        
      </button>

                  
    </form>
    </div>
    </>
  )
}
