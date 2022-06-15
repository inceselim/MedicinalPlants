import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'counter',
  initialState: {
    darkValue:false
  },
  reducers: {
    increment: (state) => {
      return { ...state, darkValue: !state.darkValue };
    }
  },
})

export const { increment } = themeSlice.actions
export const selectCount = (state) => state.counter.darkValue
export default themeSlice.reducer
