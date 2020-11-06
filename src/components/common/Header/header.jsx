import React, { Component } from 'react';
import '../Header/header.css'
class Header extends Component {
 render() { 
  return ( 
   <div className="header-top col-xs-12">
    <div className="container">
     <div className="row middle-xs between-xs">
       <div className="top-widgets-left col-md-6 col-sm-6 col-xs-12">
         <div id="tz_socials-7" className="widget widget_tz_socials">
      <ul className="nav nav-tabs">
       <li >facebook</li>
       <li className="social-network">
       <a style={{fontStyle :'bold'}} href="#">instagram</a></li>
       <li className="social-network">gmail</li>
      </ul>
      </div>
      </div>
     </div>
    </div>
   </div>
   );
 }
}
 
export default Header;