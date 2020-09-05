import React from 'react'; 
import './Widgets.css';

function Widgets () {
     return (
          <div className='widgets'>
               <iframe title="widget-one" width="340px" height="340px" 
               src="https://www.youtube.com/embed/5WiDIhIkPoM"
               style={{ border:"none" , overflow:"hidden"}}
               scrolling="no" 
               allow="encrypted-media"
               ></iframe> 
          </div>
     );
} 

export default Widgets 

