import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import Datatableu from '../../components/datatableu/DatatableUser'


const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="video"/>
                <Widget type="viewer"/>
            </div>
            <div className="charts">
          <Featured />
          <Datatableu/>
          <Chart aspect={2/1}/>
        </div>
        <div className="listcontainer">
          <div className="listTitle">
            new upload
          </div>
          <Table/>
        </div>
        </div>
    </div>
  )
}

export default Home
