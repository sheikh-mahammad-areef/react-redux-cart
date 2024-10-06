import { increment, decrement, reset } from './counterSlice';

// Bundle all actions in one object and export it
export const counterActions = {
  increment :increment,
  decrement : decrement,
  reset : reset,
};