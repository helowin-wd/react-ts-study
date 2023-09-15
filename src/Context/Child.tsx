import { useContext } from "react";
import { Context } from "./Father";
import Sun from './Sun'

const Child: React.FunctionComponent = () => {
  const count = useContext(Context)
  return (
    <div>
      <h2>子组件：{count}次</h2>
      <hr />
      <hr />

      <Sun />
    </div>
  )
}

export default Child;