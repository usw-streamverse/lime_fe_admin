import React from 'react'
import "./Navbar.scss"

import { SearchOutlined,DarkMode,List,Notifications} from '@mui/icons-material';


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlined />
      </div>
      <div className="items">
                <div className="item">
                    <DarkMode className='icon'/>
                </div>
                
                <div className="item">
                    <Notifications className='icon'/>
                </div>
                <div className="item">
                    <List className='icon'/>
                </div>
            </div>
    </div>
  </div>
  )
}

export default Navbar
