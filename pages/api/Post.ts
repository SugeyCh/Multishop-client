import instance from '@g/api'

// USER
async function postLogin(user: any) {
  try {
    const res = await instance.post('/login', user)
    if (res.data.Error) {
      throw new Error(res.data.Error);
    }
    return res
    
  } catch (err) { return err }
}

// PRODUCT
async function postProduct(prod: any) {
  try {
    const res = await instance.post('/lector', prod)
    return res
  } catch (err) {
    console.log(err)
  }
}

export { 
  postLogin,
  postProduct
}