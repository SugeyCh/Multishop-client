import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@r/slicers/authsSlicer'

export const store = configureStore({ 
  reducer: { 
    authData: authReducer,
  }
})

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch