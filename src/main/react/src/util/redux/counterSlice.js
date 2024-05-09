import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'formStatus',
  initialState: {
    value: 0,
    sendStatus: 0,
    lastMessage: null
  },
  reducers: {
    increment: state => {
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setToWaiting: state => {
        state.sendStatus = 0; //waiting for send
    }, 
    returnFromSentForm: (state, action) => {
        state.sendStatus = 2; //is sent
        state.lastMessage = action.payload;
    }, 
    sendForm: state => {
        state.sendStatus = 1; //is sending
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setToWaiting, returnFromSentForm, sendForm } = counterSlice.actions

export default counterSlice.reducer