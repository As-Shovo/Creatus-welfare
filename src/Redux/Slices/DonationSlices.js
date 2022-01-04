import { createSlice } from '@reduxjs/toolkit'
import donations from '../../fakeData/donationServices.json'



export const donationSlice = createSlice({
  name: 'Donation',
  initialState :{
      donationList : donations,
  },



  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = donationSlice.actions

export default donationSlice.reducer