import React from 'react'
import "./Featured.scss"
import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>title</h1>
        <MoreVert fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="fetchart">
          <CircularProgressbar value={50} text={"example"} strokeWidth={5} />
        </div>
        <p className="title">아마도 날짜?</p>
        <p className="userdata">인기동영상 조회수 비율</p>
        <p className="dayuserup">일단 설명칸이라고 넣어봄</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">인기동영상1</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small"/>
              <div className="resultAmount">11200</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">인기동영상2</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small"/>
              <div className="resultAmount">1244</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">인기동영상3</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small"/>
              <div className="resultAmount">4452</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
