import 'animate.css'

export default function NoAccess() {
  return (
    <>  
      <div className="access">
        <div className='div animate__animated animate__backInDown'>
          <span className="no"> No tienes </span>
          <br />
          <span className="acc animate__animated animate__pulse animate__delay-1s animate__infinite	"> Acceso </span> 
        </div>
      </div>
    </>
  )
}