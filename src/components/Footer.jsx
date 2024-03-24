import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faChartSimple, faGears, faPlus } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
       <div className=' flex justify-evenly absolute bottom-0 items-center  border border-t-gray-500 w-full h-20 text-center bg-white  text-black'>
        <Link to="Dashboard">
          <div className=' w-10 h-10 '><FontAwesomeIcon icon={faSlack} />
          <div className=' text-xs'>Dashboard</div></div>
        </Link>
        <Link to="Create">
        <div className=' w-10 h-10 '><FontAwesomeIcon  icon={faPlus} />
          <div className=' text-xs'>Create</div></div>
        </Link>
        <Link to="manage">
        <div className=' w-10 h-10 '><FontAwesomeIcon icon={faGears} />
          <div className=' text-xs'>Manage</div></div>
        </Link>
        <Link to="Performance">
        <div className=' w-10 h-10 '><FontAwesomeIcon icon={faChartSimple} />
          <div className=' text-xs'>Performance</div></div>
        </Link>
        
         </div>
   
    </div>
  )
}

export default Footer