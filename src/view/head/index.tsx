import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
// import {children} from '../../router/index'
const Head=()=>{
  const [current, setCurrent] = useState<string>("/home"); 
  const handleClick=(e:any)=>{
    setCurrent(e.key)
    // history.push(`${e.key}`)
  };
  // let history = useHistory();
  const children = [{
    path: '../home',
    meta: {
      title: 'home',
      iocn: ''
    }
  }]
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            {children.map((item:{path:string,meta:{title:string,iocn:any}})=>{
          return <Menu.Item key={item.path} icon={item.meta.iocn}>
                      {item.meta.title}
                </Menu.Item>
        })}
    </Menu>
  );
}
export default Head