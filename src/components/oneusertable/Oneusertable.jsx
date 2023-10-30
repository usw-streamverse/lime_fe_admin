import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Oneusertable.scss";

const VideoList = ({ userId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`/videos?userId=${userId}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, [userId]);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Nickname</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Views</TableCell>
            <TableCell className="tableCell">Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videos.map((video) => (
            <TableRow key={video.id}>
              <TableCell className="tableCell">{video.id}</TableCell>
              <TableCell className="tableCell">{video.nickname}</TableCell>
              <TableCell className="tableCell">{video.title}</TableCell>
              <TableCell className="tableCell">{video.views}</TableCell>
              <TableCell className="tableCell">{video.likes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VideoList;
