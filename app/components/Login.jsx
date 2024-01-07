'use client'

import Image            from 'next/image'
import { postLogin }    from '@api/Post'
import { useEffect }    from 'react'
import { useState }     from 'react'
import toast, {Toaster} from 'react-hot-toast'
import { useRouter }    from 'next/router'
import { useDispatch }  from 'react-redux'
import { loginUser }    from '@r/slicers/authsSlicer'
import { setCookie }    from '@g/cookie'

export default function Login() {
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()

  const { push } = useRouter()

  useEffect(() => { if (redirect) push('/product') }, [redirect])

  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const handleButton = async (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let pass = document.getElementById('password').value
    let newuser = {
      'nombre': name,
      'contrasena': pass
    }

    try {
      let res = await postLogin(newuser)
      if (res?.data && res?.data?.Status === 'Autenticación exitosa') {
        notifySucces('Inicio de Sesión exitoso')
        
        setCookie('token', res?.data?.token)
        
        dispatch(loginUser({ 
          username: res?.data?.usuario?.nombre, 
          rol: res?.data?.usuario?.rol, 
          token: 'abc123' 
        }))
        setRedirect(true)
      }
      else { notifyError('Usuario o contraseña incorrecto') }
    } catch (err) {
      if (err.code === 'ERR_BAD_RESPONSE') notifyError('Ha ocurrido un error')
      console.log(err)
    }
  }

  return (
    <div className='body'>
      <Toaster position="top-right" reverseOrder={true} duration={5000}/>
      <header className='header'>
        <Image className="logo" src='/img/multi2.jpg' alt="Logo de Multishop" width={200} height={200} />
      </header>
      <main>
        <Image className='user' src='/img/user.png' alt="Logo de usuario" width={200} height={200} />
        <form action="">
          <input 
            type="text" 
            id='name' 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4" 
            placeholder="Nombre de usuario" 
            required 
          />
          <input 
            type="password" 
            id="password" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-10" 
            placeholder="Contraseña" 
            required 
          />
          <button 
            type="button" 
            className="text-white bg-cyan-600 hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-600 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-cyan-600"
            onClick={ handleButton }>
              Iniciar Sesión
          </button>
        </form>
      </main>
      <footer className='end'>
        <span>Designed by</span>
        <Image className='footer' src='/img/multi2.jpg' alt="Logo de Multishop" width={200} height={200} />
      </footer>
    </div>
  )
}