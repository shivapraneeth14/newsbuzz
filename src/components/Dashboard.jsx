import React, { useEffect, useState } from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

  return ( <div className='flex flex-col  justify-evenly' style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
      <div className='w-full h-24 px-4 flex justify-evenly items-center rounded-xl bg-white'>
        <div className='w-32 h-12 bg-black rounded-xl text-white text-sm font-bold text-wrap'></div>
        <div className='w-32 h-12 bg-black rounded-xl text-white'>Status:
          <h5 className={status === 'ok' ? 'text-green-600' : 'text-red-500'}>{status && status === "ok" ? "Active" : "UNActive"}</h5>
        </div>
        <div className='w-32 h-12 bg-black rounded-xl text-white'></div>
        <div className='w-32 h-12 bg-black rounded-xl text-lg text-white font-bold'>Articles: {allArt}</div>
      </div>
      <div>
        <div className='flex px-1 justify-between items-center'>
          <h1>Top commented</h1>
          <h5 onClick={moveToTopCommented}>More</h5>
        </div>
        <div className='w-full px-2 h-64 flex overflow-x-scroll'>
          {articles && articles.map((article, index) => (
            <div className='w-60 h-64 flex-none mr-2 bg-blue-400' key={index}>
              <img className='w-60 h-1/3 object-contain' src={article.urlToImage} alt="" />
              <h1 className='font-bold text-xs'>{article.title}</h1>
              <h5 className='text-xs'>{article.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='flex px-1 justify-between items-center'>
          <h1>Top Liked</h1>
          <h5 onClick={moveToTopLiked}>More</h5>
        </div>
        <div className='w-full px-2 h-64 flex overflow-x-scroll'>
          {articles && articles.map((article, index) => (
            <div className='w-60 h-64 flex-none mr-2 bg-blue-400' key={index}>
              <img className='w-60 h-1/3 object-contain' src={article.urlToImage} alt="" />
              <h1 className='font-bold text-xs'>{article.title}</h1>
              <h5 className='text-xs'>{article.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='flex px-1 justify-between items-center'>
          <h1>Top Shared</h1>
          <h5 onClick={moveToTopShared}>More</h5>
        </div>
        <div className='w-full px-2 h-64 flex overflow-x-scroll'>
          {articles && articles.map((article, index) => (
            <div className='w-60 h-64 flex-none mr-2 bg-blue-400' key={index}>
              <img className='w-60 h-1/3 object-contain' src={article.urlToImage} alt="" />
              <h1 className='font-bold text-xs'>{article.title}</h1>
              <h5 className='text-xs'>{article.description}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;