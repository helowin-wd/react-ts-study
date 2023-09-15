import { useContext } from 'react'
import { Context } from './Father'

const Sun: React.FunctionComponent = () => {
  const count = useContext(Context)

  return (
    <div>
      <Context.Consumer>{count => <h3>后代从源头获取数据{count}次</h3>}</Context.Consumer>
      <h3>后代从源头获取数据{count}次</h3>
    </div>
  )
}

export default Sun
