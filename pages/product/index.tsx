import Products      from "@c/Products"
import { getCookie } from "@g/cookie"
import instance      from "@a/global/api"

export default function PageProduct({ data }: any) {
  return ( <Products data={data} /> )
}

export const getServerSideProps = async ({ req } : any) => {
  const token = getCookie('token', req)
  let userData : any = { empty: true } 
  
  if (token) {
    const res = await instance.post('/verifyToken', { token })
    userData['empty'] = false
    userData['name']  = res.data.data.nombre
    userData['rol']   = res.data.data.rol
  }
  return { 
    props: {data: userData}
  }
}