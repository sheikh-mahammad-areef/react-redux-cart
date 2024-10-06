// src/components/Counter.js

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../redux/counter/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value); // Access the counter value from the Redux store

  return (
    <>
      <div className="container mx-auto">
        <div className="mockup-window bg-base-300 border">
          <div className="bg-base-200 flex justify-center px-4 py-16">
            <div className="counter">
              <div className="flex flex-row">
                <div className="basis-3/4">
                  <h1>
                    Counter :
                    <span className="badge badge-secondary"> {count} </span>
                  </h1>
                </div>
                <div className="basis-1/4">
                  <div className="join">
                    <button
                      className="btn join-item"
                      onClick={() => dispatch(counterActions.increment())}
                    >
                      Increment
                    </button>
                    <button
                      className="btn join-item"
                      onClick={() => dispatch(counterActions.decrement())}
                    >
                      Decrement
                    </button>
                    <button
                      className="btn join-item"
                      onClick={() => dispatch(counterActions.reset())}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
