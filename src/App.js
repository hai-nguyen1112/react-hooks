import React, {useState, useCallback, useMemo, useEffect} from 'react';
import './App.css';

const App = () => {
    const [memoCount, setMemoCount] = useState(0)

    const [callbackCount, setCallbackCount] = useState(0)

    const callBackFunction = useCallback(() => {
        console.log(callbackCount, "callback called")
        return callbackCount
    }, [callbackCount])

    const memoFunction = () => {
        console.log(memoCount, "memo called")
    }

    useMemo(memoFunction, [memoCount])

    return (
        <div className="App">
            <ChildComponent action={callBackFunction}/>
            <button onClick={() => setCallbackCount(callbackCount + 1)}>
                Change callback count
            </button>
            <button onClick={() => setMemoCount(memoCount + 1)}>
                Change memo count
            </button>
        </div>
    );
}

const ChildComponent = ({action}) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        let val = action()
        setValue(val)
    }, [action])

    return (
        <>
            Child: {value}
        </>
    )
};

export default App;
