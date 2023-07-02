// useStateを呼び出す↓
import React,{ useState } from "react";

const TestComponent = () =>{
    const [ count, setCount ] = useState(0);
    return (
        <>
        テストコンポーネント<br/>
        { count }<br/>
        <button onClick={ () => setCount(count + 1) }>+1</button>
        </>
    )
}

// 他のファイルでも使えるようにしておく
export default TestComponent