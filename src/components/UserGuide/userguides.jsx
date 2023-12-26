import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../NavBar/NavBar';
import './userguides.css';


const VideoAccordion = ({ videos }) => {
  const [openVideo, setOpenVideo] = useState(null);

  const handleAccordionClick = (videoId) => {
    setOpenVideo(videoId === openVideo ? null : videoId);
  };

  return (
    <div className="video-accordion-container">
      {videos.map((video) => (
        <div key={video.id} className="accordion-item">
          <div
            className={`accordion-header ${video.id === openVideo ? 'open' : ''}`}
            onClick={() => handleAccordionClick(video.id)}
          >
            {video.title}
          </div>
          {video.id === openVideo && (
            <div className="accordion-content">
              <p>{video.description}</p>
              <ReactPlayer url={video.url} controls />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function UserGuides() {
  const videoOptions = [
    { id: 1, title: '1.) How To Edit User Profile', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > My Profile > Edit > Save Changes' },
    { id: 2, title: '2.) How To Provide Peer and Self Evaluation', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > Peer/Self Evaluation > Input Choices "Strongly Agree - Strongly Disagree" > Save Changes' },
    { id: 3, title: '3.) How to Provide Manager Feedback', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > Manager Feedback > Edit > Input Choices "Strongly Agree - Strongly Disagree" > Save Changes' },
    { id: 4, title: '4.) Video Guide 4', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 5, title: '5.) Video Guide 5', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 6, title: '6.) Video Guide 6', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 7, title: '7.) Video Guide 7', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 8, title: '8.) Video Guide 8', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 9, title: '9.) Video Guide 9', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 10, title:'10.) Video Guide 10', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
  ];

  return (
    <div>
        <Navbar />
    <div className="user-guides-container">
         
      <h2>Quick User Guide</h2>
      <VideoAccordion videos={videoOptions} />
    </div>
    </div>
  );
}
