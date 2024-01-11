import instance from '@g/api'

// USER
async function login(token: string) {
  try {
    const res = instance.get(`/`)
    return res
  } catch (err) {
    return err
  }
}

// PRODUCT
async function lector(cod: string) {
  try {
    const res = await instance.get(`/lector/${cod}`)
    return res
  } catch (err) { console.log(err) }
}

export{
  login, 
  lector
}