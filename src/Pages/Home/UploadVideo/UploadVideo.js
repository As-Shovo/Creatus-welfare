import React from 'react';
import './UploadVideo.css'
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'

const UploadVideo = () => {
    return (
            <Col className='my-5'>
                <ReactPlayer
                className = 'video-bg'
                    url="https://www.youtube.com/watch?v=2l1LWmEASC8"
                    controls
                    playbackRate={2}
                    width="100%"
                />
            </Col>
    );
};

export default UploadVideo;