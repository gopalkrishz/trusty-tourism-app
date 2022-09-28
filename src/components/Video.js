import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/video-2.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Trusty Tourism</h1>
                <p>India's first Blockchain Tourist Ticket Booking App</p>
                <div>
                    <Link to='/training' className='btn'>catalog</Link>
                    <Link to='/contact' className='btn btn-light'>about us</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
