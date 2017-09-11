import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {

  const videoItem = videos.map(video => {
    return <VideoListItem
            onVideoSelect={onVideoSelect}
            key={video.etag}
            video={video} />;
  });

  return (
    <ul className="col-md-4 list-group ">
      {videoItem}
    </ul>
  );
};

export default VideoList;
