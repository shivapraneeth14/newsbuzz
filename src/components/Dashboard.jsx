import React, { useEffect, useState } from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [allArt, setAllArt] = useState(0);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function moveToTopCommented() {
    navigate("/Dashboard/Topcommented");
  }

  function moveToTopShared() {
    navigate("/Dashboard/Topshared");
  }

  function moveToTopLiked() {
    navigate("/Dashboard/Topliked");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Data(); 
        console.log(data);
        setStatus(data.status);
        setArticles(data.articles); 
        setAllArt(data.totalResults); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <>
     <div className='flex flex-col  justify-evenly w-full '  >
      <div className='w-full h-24 px-4 flex justify-center items-center rounded-xl bg-white'
      ><div className='w-32 mr-4 sm:w-28 sm:text-xs h-12 bg-black rounded-xl text-white text-sm font-bold text-wrap'></div>
  <div className='w-32 mr-4  h-12 sm:w-28 sm:text-xs bg-black rounded-xl text-white text-sm md:text-base'>
    Status:
    <h5 className={status === 'ok' ? 'text-green-600' : 'text-red-500'}>
      {status && status === "ok" ? "Active" : "UNActive"}
    </h5>
  </div>
  <div className='w-32 sm:w-28 mr-4  h-12 sm:text-xs bg-black rounded-xl text-white text-sm font-bold text-wrap'></div>
  <div className='w-32  sm:w-28 mr-4 h-12 sm:text-xs bg-black rounded-xl text-white text-sm md:text-base'>
    Articles: {allArt}
  </div>
      </div>
     </div>
     <div className='   left-0 font-bold mb-2'><h1 className=' mb-2'>Categorys</h1>
     <div className='  flex justify-evenly w-full h-28'>
      <div onClick={moveToTopCommented} className=' pt-1 rounded-2xl w-20 h-20 text-white text-center text-2xl bg-orange-600'> <FontAwesomeIcon  icon={faComment} /><div className='text-xs font-thin '>Top ceommented</div></div>
      <div onClick={moveToTopLiked} className=' pt-1 rounded-2xl w-20 h-20 text-white text-center text-2xl bg-red-600'> <FontAwesomeIcon  icon={faHeart} /><div className='text-xs font-thin '>Top Liked</div></div>
      <div onClick={moveToTopShared} className=' pt-1 rounded-2xl w-20 h-20 text-white text-center text-2xl bg-purple-600'> <FontAwesomeIcon  icon={faShare} /><div className='text-xs font-thin '>Top Shared</div></div>
      </div>
     </div>
     
    </>
  );
}

export default Dashboard;