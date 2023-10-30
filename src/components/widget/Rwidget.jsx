import React, { useEffect, useState } from 'react';
import "./Widget.scss";
import { EmojiEmotions, KeyboardArrowUp, OndemandVideo, Person } from '@mui/icons-material';
import axios from 'axios';

const Widget = ({ type }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 서버에서 전일과 오늘 데이터 가져오는 axios 요청
    axios.get('/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { user, video, viewer } = data;

  let diff = 0;

  switch (type) {
    case "user":
      diff = user.today - user.yesterday;
      break;
    case "video":
      diff = video.today - video.yesterday;
      break;
    case "viewer":
      diff = viewer.today - viewer.yesterday;
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="first">
        <span className="title">{type}</span>
        <span className="counter">
          {diff > 0 && "+"}
          {diff} %
        </span>
        <span className="link">See all {type}</span>
      </div>
      <div className="second">
        <div className={`percentage ${diff > 0 ? "positive" : "negative"}`}>
          <KeyboardArrowUp />
          {diff} %
        </div>
        {type === "user" && (
          <EmojiEmotions
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        )}
        {type === "video" && (
          <OndemandVideo
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        )}
        {type === "viewer" && (
          <Person
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Widget;
