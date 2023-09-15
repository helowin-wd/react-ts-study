import  {  createContext, useState } from 'react';
import Child from './Child';

// 创建一个context
export const Context = createContext(0)

const Father: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>父祖件：{count}</h1>
      <button onClick={()=>setCount(count+1)}>点击</button>
      <hr />
      <Context.Provider value={count}>
        <Child />
      </Context.Provider>
    </div>
  )
}

export default Father;