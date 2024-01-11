'use client'

import { lector }   from "@api/Get"
import toast        from "react-hot-toast"
import { useState } from "react"

export default function Visor() {
  const [inv, setinv] = useState({
    descrip: "",
    precio1: "",
    existencia: "",
  })

  const notifyError  = (msg) => { toast.error(msg) }

  const handleSearch = async () => {
    let search = document.getElementById('search').value

    try {
      const res = await lector(search)
      if (typeof res === "object") {
        setinv({
          descrip:    res?.data[0]?.descrip,
          precio1:    res?.data[0]?.precio1 + " $",
          existencia: res?.data[0]?.existencia + " unidades",
        })
        return res
      } else if (res == undefined) { notifyError('Producto no encontrado') }
    } catch (err) { console.log(err) }
  }

  const handleClear = () => {
    document.getElementById('search').value = ''
    setinv({ descrip: '', })
  }

  return (
    <>
      <main className="main">
        <form action="">
          <input
            type="text"
            id="search"
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
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            readOnly
            placeholder="Precio"
            value={ inv.precio1 ? inv.precio1 : "" }
            required
          />
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            readOnly
            placeholder="Existencia"
            value={ inv.existencia ? inv.existencia : "" }
            required
          />
        </form>
      </main>
    </>
  )
}