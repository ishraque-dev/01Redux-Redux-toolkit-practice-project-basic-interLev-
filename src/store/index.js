// import { createStore } from 'redux'; //TODO:Standard redux
import { createSlice, configureStore } from '@reduxjs/toolkit'; //TODO: redux toolkit
const CounterInitialState = { counter: 0, show: true };
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       show: state.show,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       show: state.show,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       show: state.show,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       show: !state.show,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
//TODO: With redux toolkit
const counterSlice = createSlice({
  name: 'Counter',
  initialState: CounterInitialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});
// const store = createStore(counterReducer);//TODO:Standard redux

///////////////////////////////////////
const authInitialState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducer: {
    login(state) {
      state = state.isAuthenticated = true;
    },
    logout(state) {
      state = state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
}); //TODO:redux toolkit

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
