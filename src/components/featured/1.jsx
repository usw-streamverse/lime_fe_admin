import React, { useEffect, useState } from 'react';
import "./Featured.scss";
import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import axios from 'axios';

const Featured = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    // 서버에서 비디오 데이터 가져오는 axios 요청
    axios.get('/videos')
      .then(response => {
        // 여기서 데이터를 가장 높은 조회수 순으로 정렬
        const sortedVideos = response.data.sort((a, b) => b.views - a.views);
        // 상위 3개 비디오만 선택
        const top3Videos = sortedVideos.slice(0, 3);
        setVideos(top3Videos);
      })
      .catch(error => console.error('Error', error));
  }, []);

  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Top 3 Videos</h1>
        <MoreVert fontSize='small' />
      </div>
      <div className="bottom">
        <div className="fetchart">
          <CircularProgressbar value={50} text={"example"} strokeWidth={5} />
        </div>
        {videos.map((video, index) => (
          <div key={video.id} className="video-info">
            <p className="title">{video.title}</p>
            <p className="userdata">Views: {video.views}</p>
            <p className="dayuserup">top3 영상 비율</p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Rank</div>
                <div className="itemResult positive">{index + 1}</div>
              </div>
              <div className="item">
                <div className="itemTitle">Likes</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlined fontSize="small" />
                  <div className="resultAmount">{video.likes}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
