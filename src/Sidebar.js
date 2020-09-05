import React from 'react'; 

import SidebarRow from './SidebarRow' 
import './Sidebar.css'

import LocalHospitalIcon from '@material-ui/icons/LocalHospitalSharp';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlagsSharp';
import PeopleIcon from '@material-ui/icons/PeopleAltSharp';
import ChatIcon from '@material-ui/icons/ChatSharp';
import StorefrontIcon from '@material-ui/icons/StorefrontSharp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrarySharp';

// import data from state vars. 
import { useStateValue } from './StateProvider';

function Sidebar() {
     const [{ user} , dispatch] = useStateValue();
     return (
     <div className="sidebar">
          <SidebarRow src={user.photoURL} title={user.displayName}/>
          <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
          <SidebarRow Icon={EmojiFlagIcon} title='Pages'/>
          <SidebarRow Icon={PeopleIcon} title='Friends'/>
          <SidebarRow Icon={ChatIcon} title='Messenger'/>
          <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
          <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
     </div>
    )
} 

export default Sidebar ;