import React, { useState,useEffect} from 'react'
// import { Button } from 'antd';

// 标题组件
const Title:React.FC<{title:string}>=({title="我是标题"})=>{
    return (
      <div className="title">
        {title}
      </div>
    )
}
/**
 * 计数器组件
 * @param param0 
 */
const Home:React.FC<{ initial: number }> = ({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial)
  return (
    <div className="component">
      <Title title="我是首页" />
      {/* <Button type="primary">Button</Button> */}

      <p>父组件传给我的值: {count}</p>
    </div>
  )
}
export default Home