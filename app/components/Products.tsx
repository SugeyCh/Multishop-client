'use client'

import {  useEffect }     from 'react'
import Image from 'next/image'
import toast, {Toaster}   from 'react-hot-toast'
import { useRouter }    from 'next/router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import type { RootState } from '@r/store'
import { logoutUser } from '@r/slicers/authsSlicer'
import { useState } from 'react'

export default function Products() {
  const [redirect, setRedirect] = useState(false)
  const { push } = useRouter()

  const dispatch = useDispatch()

  const userData = useSelector((state: RootState) => state.authData )
  console.log(userData)

  useEffect(() => { if (redirect) push('/') }, [redirect])

  const notifySucces = (msg: string) => { toast.success(msg) }

  const handleLoggout = async () => {
    try {
      dispatch(logoutUser())
      notifySucces('Cierre de sesión exitoso')
      setRedirect(true)
    } catch (err) { throw err }
  }
  
  return (
    <>
      <div className='body'>
      <Toaster position="top-right" reverseOrder={true} />
        <header className='header'>
          <img className="logo" src='/img/multi2.jpg' alt="Logo de Multishop" />
          <button 
            id='btn' 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            onClick={ handleLoggout }>
              Salir
          </button>
        </header>
      <footer className='end'>
        <span>Designed by</span>
        <img className='footer' src='/img/multi2.jpg' alt="Logo de Multishop" />
      </footer>
      </div>
    </>
  )
}