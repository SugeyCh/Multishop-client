'use client'

import { useEffect }      from 'react'
import { useRouter }      from 'next/router'
import { useDispatch }    from 'react-redux'
import { useSelector }    from 'react-redux'
import { useState }       from 'react'
import Image              from 'next/image'
import toast, {Toaster}   from 'react-hot-toast'
import type { RootState } from '@r/store'
import { logoutUser }     from '@r/slicers/authsSlicer'
import Admin              from './Admin'
import Visor              from './Visor'
import Colector           from './Colector'
import NoAccess           from './Auth'
import { loginUser }      from '@r/slicers/authsSlicer'

export default function Products({data}: any) {
  const [ redirect, setRedirect ] = useState(false)
  
  const { push } = useRouter()

  const dispatch = useDispatch()

  const userData = useSelector((state: RootState) => state.authData )
  const role = userData.rol

  useEffect(() => { 
    if (redirect)  push('/') 
    if (role == '' && data.empty) push('/noaccess')  
    else if (role == '' && !data.empty) dispatch(loginUser({username: data.name, rol: data.rol}))
  }, [redirect])

  const notifySucces = (msg: string) => { toast.success(msg) }

  const handleLoggout = async () => {
    try {
      dispatch(logoutUser())
      notifySucces('Cierre de sesión exitoso')
      setRedirect(true)
    } catch (err) { console.log(err) }
  }
  
  return (
    <>
      <div className='body'>
        <Toaster position="top-right" reverseOrder={true} />
        <header className='header'>
          <Image className="logo" src='/img/multi2.jpg' alt="Logo de Multishop" width={200} height={200} />
          <button 
            id='btn' 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            onClick={ handleLoggout }>
              Salir
          </button>
        </header>
        {
            role == 'admin'    ? ( <Admin /> ) 
          : role == 'visor'    ? ( <Visor /> ) 
          : role == 'colector' ? ( <Colector /> ) 
          : ( <NoAccess /> )
        }
        <footer className='end'>
          <span>Designed by</span>
          <Image className='footer' src='/img/multi2.jpg' alt="Logo de Multishop" width={200} height={200} />
        </footer>
      </div>
    </>
  )
}

