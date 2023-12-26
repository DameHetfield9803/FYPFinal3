import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../NavBar/NavBar';
import './userguides.css';

// Define a functional component called VideoAccordion that takes a prop 'videos'.
const VideoAccordion = ({ videos }) => {

  // State hook to manage the currently open video.
  const [openVideo, setOpenVideo] = useState(null);

  // Function to handle click events on accordion headers, toggling the open/closed state.
  const handleAccordionClick = (videoId) => {
    setOpenVideo(videoId === openVideo ? null : videoId);
  };

  // Render the video accordion container and its items based on the provided videos.
  return (
    <div className="video-accordion-container">
      {videos.map((video) => (
        <div key={video.id} className="accordion-item">
          <div
            // Apply styling based on whether the video is open or closed.
            className={`accordion-header ${video.id === openVideo ? 'open' : ''}`}
            // Attach click event handler to toggle the accordion state.
            onClick={() => handleAccordionClick(video.id)}
          >
            {video.title}
          </div>
          {video.id === openVideo && (
            // Render video description and ReactPlayer component if the video is open.
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

// Define the UserGuides functional component.
export default function UserGuides() {

  // Define an array of video options with titles, URLs, and descriptions.
  const videoOptions = [
    { id: 1, title: '1.) How To Edit User Profile', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > My Profile > Edit > Save Changes' },
    { id: 2, title: '2.) How To Provide Peer and Self Evaluation (Employee)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > Peer/Self Evaluation > Input Choices "Strongly Agree - Strongly Disagree" > Save Changes' },
    { id: 3, title: '3.) How to Provide Manager Feedback(Employee)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Login > Homepage > Manager Feedback > Edit > Input Choices "Strongly Agree - Strongly Disagree" > Save Changes' },
    { id: 4, title: '4.) How to add in your Accolades (Employee)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',description: 'Login > Homepage > Accolades (In your navigation bar) > Input Items > Submit' },
    { id: 5, title: '5.) How To Report An Issue', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',description: 'Login > Homepage > Report Form > Input name, email and bug description > Submit' },
    { id: 6, title: '6.) How to make an Appraisal Form (Human Resource)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 7, title: '7.) How to view Employee Table (Human Resource/Admin/Manager)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 8, title: '8.) How to view Attendance Table (Human Resource/Admin/Manager)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 9, title: '9.) How to fill in Appraisal Form (Manager)', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
    { id: 10, title:'10.) Video Guide Template 10', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', },
  ];

  // Render the UserGuides component, including the Navbar and VideoAccordion.
  return (
    <div>
      {/* Render the custom Navbar component. */}
      <Navbar />
      <div className="user-guides-container">
        <h2>Quick User Guide</h2>
        <p>Click On Any Box Guide Below For Video Assistance</p>
        {/* Render the VideoAccordion component with the provided video options. */}
        <VideoAccordion videos={videoOptions} />
      </div>
    </div>
  );
}
