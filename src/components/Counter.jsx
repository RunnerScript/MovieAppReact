import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count:{count}</h1>
            <button className="P-4 mx-2 " onClick={() => dispatch(increment())}>Increase</button>
            <button className="P-4 mx-2 " onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    )
}
export default Counter;