export default function Error404() {
  return (
    <div className="error">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-cyan-600">404</p>
          <h1 className="mt-4 font-bold tracking-tight text-gray-900">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6 p-2.5">
            <a href="/" className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 p-2.5">Go back home</a>
          </div>
        </div>
      </main>
      <footer>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='circle4'></div>
      </footer>
    </div>
  )
}