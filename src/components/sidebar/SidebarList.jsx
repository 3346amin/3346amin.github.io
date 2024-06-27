import React from 'react';
import './sidebar.css';
import {LineStyle, Timeline, TrendingUp,PeopleOutline,FitnessCenter,AttachMoney,BarChart,MailOutline,ChatOutlined,FeedbackOutlined,WorkOutlineOutlined,ReportGmailerrorredOutlined} from '@mui/icons-material/';







function SidebarList(props) {


    return (
      <div >
                    <div className="sidebarMenu">
        <h3 className="sidebarTitle">{props.title}</h3>
        <ul className="sidebarList">
            <li className="sidebarListItem active">
            <LineStyle className='sidebarIcon'/>
            {props.firstItemName}
            </li>
            <li className="sidebarListItem">
            <Timeline className='sidebarIcon'/>
                {props.secondItemName}
            </li>
            <li className="sidebarListItem">
            <TrendingUp className='sidebarIcon'/>
                Sales
            </li>

        </ul> 
        </div>   


        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <PeopleOutline className='sidebarIcon'/>
            Members
            </li>
            <li className="sidebarListItem">
            <FitnessCenter className='sidebarIcon'/>
                Packages
            </li>
            <li className="sidebarListItem">
            <AttachMoney className='sidebarIcon'/>
                Transactions
            </li>
            <li className="sidebarListItem">
            <BarChart className='sidebarIcon'/>
                Reports
            </li>
        </ul> 
        </div>   



        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <MailOutline className='sidebarIcon'/>
            Mail
            </li>
            <li className="sidebarListItem">
            <FeedbackOutlined className='sidebarIcon'/>
                Feedback
            </li>
            <li className="sidebarListItem">
            <ChatOutlined className='sidebarIcon'/>
                Messages
            </li>

        </ul> 
        </div>   


        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Stuff</h3>
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <WorkOutlineOutlined className='sidebarIcon'/>
            Manage
            </li>
            <li className="sidebarListItem">
            <Timeline className='sidebarIcon'/>
                {props.secondItemName}
            </li>
            <li className="sidebarListItem">
            <ReportGmailerrorredOutlined className='sidebarIcon'/>
            Reports
            </li>

        </ul> 
        </div>   





  
      </div>
  
    );
  }

  export default SidebarList;