import { useState, useCallback } from 'react'

import Child from './Child'

const Father: React.FC = () => {
  const [count, setCount] = useState(0)
  // useCallback 优化
  const changeCount = useCallback((code: number)=>setCount(code), [])

  return (
    <div>
      <h1>父组件：点击次数{count}次</h1>
      <button onClick={() => setCount(count + 1)}>父组件-点击</button>
      <hr />
      <Child msg={count} changeCount={changeCount}/>
    </div>
  )
}

export default Father
