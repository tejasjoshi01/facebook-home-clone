import React from 'react'; 
import './Header.css';

// Fetching Icons . 
import SearchIcon from '@material-ui/icons/Search';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp'; 
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum'; 
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import data from state variables . 
import { useStateValue } from './StateProvider'

function Header () {

     const [{ user }, dispatch ] = useStateValue();

     return (
     <div className='header'>

          <div className='header__left'>
               <img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' alt="fb-logo"/>
          </div>

          <div className='header__input'>
               <SearchIcon/>
               <input placeholder='Search Facebook' type='text'/> 
          </div>

          <div className='header__centre'>
               <div className='header__option header__option--active '>
                    <HomeSharpIcon fontSize='large' />
               </div>

               <div className='header__option'>
                    <FlagSharpIcon fontSize='large' />
               </div>  

               <div className='header__option'>
                    <SubscriptionsSharpIcon fontSize='large' />
               </div>   

               <div className='header__option'>
                    <StorefrontSharpIcon fontSize='large' />
               </div> 

               <div className='header__option'>
                    <SupervisedUserCircleSharpIcon fontSize='large'/>
               </div>
          </div>

          <div className='header__right'>
               <div className='header__info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
               </div>
               <IconButton>
                     <AddIcon/>
               </IconButton>
               <IconButton>
                     <ForumIcon/>
               </IconButton>
               <IconButton>
                     <NotificationsActiveIcon/>
               </IconButton>
               <IconButton>
                     <ExpandMoreIcon/>
               </IconButton>
          </div>
 


     </div> ); 

} 

export default Header ;