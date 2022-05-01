import { BankOutlined } from '@ant-design/icons';
import  { lazy} from 'react';//lazy是为了实现路由懒加载
const icon=<BankOutlined></BankOutlined>//设置图标
const home=  {
  path: "/home",
  name: "首页",
  sort:1,
  component:lazy(()=>import('../../view/home/index')),
  meta: {
    title: "首页",
    iocn: icon,
    keepAlive: true
  }
}
export default home