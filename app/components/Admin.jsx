export default function Admin() {
  return (
    <>
      <main className="main">
        <form action="">
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Escribe el código del producto"
            required
          />
          <div className="buttons">
            <button
              type="button"
              className="text-white bg-cyan-600 hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-600 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:focus:ring-cyan-600"
            >
              Buscar
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            >
              Limpiar
            </button>
          </div>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mt-6 mb-4"
            placeholder="Descripción"
            required
          />
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Precio"
            required
          />
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Existencia"
            required
          />
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 text-center mb-4"
            placeholder="Ingresar Conteo"
            required
          />
          <button
            type="button"
            className="text-white bg-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg w-50 text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-500"
          >
            Registrar
          </button>
        </form>
      </main>
    </>
  )
}