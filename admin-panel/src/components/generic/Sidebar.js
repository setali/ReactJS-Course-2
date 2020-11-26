import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, DashboardOutlined } from '@ant-design/icons';

const {SubMenu} = Menu;

class Sidebar extends React.Component {

  render () {
    return (
      <Menu
        onClick={this.handleClick}
        style={{width: 256}}
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="/">
          <DashboardOutlined/>
          <Link to={"/"}>
            داشبورد
          </Link>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined/>
              <span>مدیریت موجودیت‌ها</span>
            </span>
          }
        >
          <Menu.ItemGroup key="persons" title="کاربران">
            <Menu.Item key="/person">
              <Link to="/person">
                لیست کاربران
              </Link>
            </Menu.Item>
            <Menu.Item key="/person/new">
              <Link to="/person/new">
                افزودن کاربر
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="posts" title="مقالات">
            <Menu.Item key="/post">
              <Link to="/post">
                لیست مقالات
              </Link>
            </Menu.Item>
            <Menu.Item key="/post/new">
              <Link to="/post/new">
                افزودن مقاله
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>

        </SubMenu>

      </Menu>
    );
  }
}

export default Sidebar