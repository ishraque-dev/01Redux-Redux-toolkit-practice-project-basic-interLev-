import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { counterActions } from '../store/index';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const toggleCounterHandler = () => {
    // dispatch({//TODO:Stander redux
    //   type: 'toggle',
    // });
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    // dispatch({//TODO:Stander redux
    //   type: 'increment',
    // });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({//TODO:Stander redux
    //   type: 'decrement',
    // });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({//TODO:Stander redux
    //   type: 'increase',
    //   amount: 10,
    // });
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <dvi>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </dvi>
    </main>
  );
};

export default Counter;
