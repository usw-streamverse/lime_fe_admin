import React from 'react'
import "./Sidebar.scss"
import { SpaceDashboard,Group,OndemandVideo,DataThresholding,Settings,MoreHoriz, DarkMode} from '@mui/icons-material';
import { Link, useActionData } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>LIME</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">main</p>
            <Link to="/" style={{textDecoration:"none"}}>
            <li>
                <SpaceDashboard className='icon'/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">main content</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
                <Group className='icon'/>
                <span>Users</span>
            </li>
            </Link>
            <li>
                <OndemandVideo className='icon'/>
                <span>Videos</span>
            </li>
            <Link to="/users/1" style={{textDecoration:"none"}}>
            <li>
                <DataThresholding className='icon'/>
                <span>Stats</span>
            </li>
            </Link>
            <p className="title">service</p>
            <li>
                <Settings className='icon'/>
                <span>Settings</span>
            </li>
            <li>
                <MoreHoriz className='icon'/>
                <span>Other</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption" 
        onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div className="colorOption"
        onClick={() => dispatch({ type: "DARK" })}></div>
      </div>

    </div>
  )
}

export default Sidebar
