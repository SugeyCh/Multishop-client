import instance from '@g/api'

async function login(token: string) {
  try {
    const res = instance.get('/')
    return res
  } catch (err) {
    return err
  }
}

async function logout(){
  try {
    const res = await instance.get('/logout')
    return res.data
  } catch (err) { return err }
}

async function lector( cod: string) {
  try {
    const res = await instance.get(`/lector/${cod}`)
    console.log(res)
    return res
  } catch (err) { return err }
}

export{
  login, logout,
  lector
}