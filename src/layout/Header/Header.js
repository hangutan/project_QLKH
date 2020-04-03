import React,{useEffect,useState} from 'react';
import { Menu } from 'antd';
import { useHistory, useLocation  } from 'react-router-dom';

function Header(){
    const history = useHistory();
    const location = useLocation();
    
    useEffect(()=>{
        setSelectMenu(location.pathname)
    },[location])

    const [selectMenu,setSelectMenu] = useState('');

    const handleSelectMenu = (selecter)=>{
        console.log(selecter)
        setSelectMenu(selecter.key);
        history.push(selecter.key);
    }
    return(
        <Menu
            onSelect={handleSelectMenu}
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectMenu]}
            defaultSelectedKeys={[selectMenu]}
            style={{width:"60"}}
        >
            <Menu.Item key="/home">Home</Menu.Item>
            <Menu.Item key="/courses">Courses</Menu.Item>
            <Menu.Item key="/about">About</Menu.Item>
            <Menu.Item key="/blog">Blog</Menu.Item>
            <Menu.Item key="/event">Event</Menu.Item>
            <Menu.Item key="/login">Login</Menu.Item>
        </Menu>
    )
}

export default Header;