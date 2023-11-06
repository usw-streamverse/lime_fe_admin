import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./Single.scss"
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import User11 from '../../components/user11/User11'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="useButton">button</div>
            <h1 className="title">title</h1>
            <div className="item">
              <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCy1I2ab0-ID00L8_weFZlzXzhV-r1ndEdqhNYgYW&s" 
              alt="" 
              className="itemImg" />
              <div className="details">
                <h1 className="username">USER NAME</h1>
                <div className="detailinput">
                  <span className="key">email : </span>
                  <span className="value">lime@lime.comlime@lime.com</span>
                </div>
                <div className="detailinput">
                  <span className="key">ather : </span>
                  <span className="value">atherinput</span>
                </div>
                <div className="detailinput">
                  <span className="key">ather2 : </span>
                  <span className="value">atherinput2</span>
                </div>
                <div className="detailinput">
                  <span className="key">ather3 : </span>
                  <span className="value">atherinput3</span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="right"></div>
          <Chart aspect={3/1}/>
        </div>
      <h1 className="title">user video</h1>
      <div className="bottom"></div>
      
        {/* <Table/> */}
        {/* <Oneusertable/> */}
        <User11/>
      </div>
    </div>
  )
};

export default Single
