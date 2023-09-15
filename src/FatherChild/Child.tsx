import { useCallback } from 'react'

interface childProps {
  msg: number
  changeCount: Function
}

const Child: React.FC<childProps> = props => {
  const { msg, changeCount } = props
  const childClick = useCallback(() => changeCount(msg + 1), [changeCount, msg])
  return (
    <div>
      <h2>子组件：{msg}次</h2>
      <button onClick={childClick}>子组件-点击</button>
    </div>
  )
}

export default Child
