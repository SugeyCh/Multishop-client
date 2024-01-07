import { createSlice } from "@reduxjs/toolkit"
import { Auth } from "@t/common"

const initialState: Auth = { 
  username: '',
  rol: ''
}

const authData = createSlice({ 
  name: 'authData',
  initialState,
  reducers: { 
    loginUser: (state: any, action) => {
      return { 
        ...state, 
        ...action.payload,
      }
    },
    logoutUser: (state) => {
      return initialState
    }
  }
})

export const { loginUser, logoutUser } = authData.actions
export default authData.reducer 