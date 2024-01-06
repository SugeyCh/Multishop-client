import instance from '@g/api'

async function postLogin(user: any) {
  try {
    const res = await instance.post('/login', user)
    if (res.data.Error) {
      throw new Error(res.data.Error);
    }
    //console.log(res)
    return res
  } catch (err) { return err }
}

export { postLogin }