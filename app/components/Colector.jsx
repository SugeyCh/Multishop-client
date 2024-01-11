'use client'

import { lector }      from "@api/Get"
import { useState }    from "react"
import toast           from "react-hot-toast"
import { useSelector } from "react-redux"
import { postProduct } from "@api/Post"

export default function Colector() {
  const [inv, setinv] = useState({
    descrip: "",
  })

  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const userData = useSelector((state) => state.authData )
  const user = userData.username

  const handleSearch = async () => {
    let search = document.getElementById('search').value

    try {
      const res = await lector(search)
      if (typeof res === "object") {
        setinv({
          descrip: res?.data[0]?.descrip,
        })
        return res
      } else if (res == undefined) { notifyError('Producto no encontrado') }
    } catch (err) { console.log(err) }
  }

  const postProd = async () => {
    let conteo = document.getElementById('conteo').value

    try {
      const result = await handleSearch()
      const cod_prod = result?.data[0]?.codigo
      if (cod_prod) {
        let product = {
          user,
          cod_prod,
          conteo
        }

        const res = await postProduct(product)
        if (res?.status == 200) {
          notifySucces('El conteo del producto ha sido registrado exitosamente')
        } else { notifyError('No se pudo registrar el conteo del producto') }
      }
    } catch (err) { console.log(err) }
  }

  const handleClear = () => {
    document.getElementById('search').value = ''
    document.getElementById('conteo').value = ''

    setinv({ descrip: '', })
  }

  return (
    <>
      <main className="main">
        <form action="">
          <input
            id="search"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Escribe el código del producto"
            required
          />
          <div className="buttons">
            <button
              type="button"
              className="text-white bg-cyan-600 hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-600 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-cyan-600"
              onClick={ handleSearch }
            >
              Buscar
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              onClick={ handleClear }
            >
              Limpiar
            </button>
          </div>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mt-6 mb-4"
            readOnly
            placeholder="Descripción"
            value={ inv.descrip ? inv.descrip : "" }
            required
          />
          <input
            id="conteo"
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Ingresar Conteo"
            required
          />
          <button
            type="button"
            className="text-white bg-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-500"
            onClick={ postProd }
          >
            Registrar
          </button>
        </form>
      </main>
    </>
  )
}