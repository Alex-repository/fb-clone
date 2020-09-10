import React from 'react';
import "./styles/Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from '../StateProvider';
function Sidebar() {

    const[{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
                title={ user.displayName }
                src={ user.photoURL }
            />
            <SidebarRow 
                title="COVID-19 Information center"
                Icon={LocalHospitalIcon}
            />
            <SidebarRow 
                title="Pages"
                Icon={EmojiFlagsIcon}
            />
            <SidebarRow 
                title="Friends"
                Icon={PeopleIcon}
            />
            <SidebarRow 
                title="Menssenger"
                Icon={ChatIcon}
            />
            <SidebarRow 
                title="Marketplace"
                Icon={StorefrontIcon}
            />
            <SidebarRow 
                title="Videos"
                Icon={VideoLibraryIcon}
            />
          
        </div>
    )
}

export default Sidebar
