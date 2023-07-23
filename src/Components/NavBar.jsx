import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';
import useTheme from '../hooks/useTheme';
import lightIcon from '../assets/light.svg';
import darkIcon from '../assets/dark.svg';

export default function navbar() {
    let [search, setSearch] = useState('');
    let navigate = useNavigate();
    let handleSearch = (e) => {
        navigate('/?search=' + search);
    }
    let {theme, changeTheme} = useTheme();

  return (
    <div>
        <nav className={`border border-b-2 `}>
            <ul className='flex justify-between max-w-6xl p-3 mx-auto items-center'>
               <li className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input value={search} onChange={e => setSearch(e.target.value)} type='text' placeholder='Search Book...' className='outline-none px-2 py-1 rounded-lg'></input>
                    
                    <button onClick={handleSearch} className='text-white bg-primary p-2 rounded-2xl flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <span className='hidden md:block'>Search</span>    
                    </button>

               </li>
               <Link to='/' className='flex items-center gap-3 md:-ml-33 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg> 
                    {/* heroicon website */}

                    <span className='text-2 font-bold text-primary hidden md:block'>Book Store</span>
               </Link>
               <li className='flex gap-3 items-center'>
                    <NavLink to='/create' className='text-white bg-primary p-3 rounded-2xl flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                        <span className='hidden md:block'>Create Book</span>
                        
                    </NavLink>
                    <div className='w-11'>
                        <img src='https://avatars.githubusercontent.com/u/121273693?v=4' className='rounded-full'></img>
                    </div>
                    <div className='cursor-pointer'>
                        {theme == 'dark' ? <img src={lightIcon} className='w-8' onClick={()=>changeTheme('light')}></img> :
                        <img src={darkIcon} className='w-8' onClick={()=>changeTheme('dark')}></img>}
                    </div>

               </li>
            </ul>
        </nav>
    </div>
  )
}
