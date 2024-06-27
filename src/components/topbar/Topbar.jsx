import React from 'react';
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@mui/icons-material/';
import profile from '../../img/profile.jpg'

function Topbar() {
    return (
      <div className='topbar'>
          <div className="topbarWrapper">
            <div className="topLeft"><span className='logo'>mirza</span></div>
            <div className="topRight">

              <div className='topIcons'>
                <NotificationsNone/>
                <span className='topIconBage'>2</span>
              </div>

              <div className='topIcons'>
                <Language/>
                <span className='topIconBagelang'>en</span>
              </div>

              <div className='topIcons'>
                <Settings/>

              </div>

              <img src={profile} className='topAvatar'/>

              </div>
          </div>
      </div>
  
    );
  }
  
  
  
  export default Topbar;
  