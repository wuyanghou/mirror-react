import React from 'react'
import {NavLink} from 'mirrorx'
import {Menu, Icon} from 'antd'
const MenuItem = Menu.Item

const Header = ({location}) => (
  <Menu
    mode="horizontal"
    theme="dark"
    selectedKeys={[location.pathname]}
  >
    <MenuItem key="/">
      <NavLink to="/"><Icon type="home" />Home</NavLink>
    </MenuItem>
    <MenuItem key="/users">
      <NavLink to="/users"><Icon type="bars" />Users</NavLink>
    </MenuItem>
    <MenuItem key="/test">
      <NavLink to="/test"><Icon type="frown-circle" />test</NavLink>
    </MenuItem>
    <MenuItem key="/webworker">
      <NavLink to="/webworker"><Icon type="frown-circle" />webworker</NavLink>
    </MenuItem>
    <MenuItem key="/mirror">
      <a target="_blank" href="https://github.com/mirrorjs/mirror">Mirror</a>
    </MenuItem>
  </Menu>
)

export default Header
