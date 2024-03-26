import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import { Bar, Line,Pie } from 'react-chartjs-2';

function NewsFeedPerformance() {
  const [performanceData, setPerformanceData] = useState({
    labels: [],
    views: [100000,200000,300000],
    likes: [1245369,7894563,456123],
    engagementRate: [1245511,2569856,3000000],
    averageuserscreentime:[2,4,3,3,6,4,3],
    Prefernces:[100,150,220,120]

  });

  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://www.googleapis.com/youtube/v3/search'); // Replace with your API endpoint
  //     const data = await response.json();
  //     setPerformanceData(data);
  //     console.log(data)
  //   };

  //   fetchData();
  // }, []);

  // const calculateEngagementRate = (views, likes) => {
  //   if (views === 0) return 0; 
  //   return ((likes / views) * 100).toFixed(2); 
  // };

  const viewsData = {
    labels: "views analysis",
    datasets: [
      {
        label: 'views',
        data: performanceData.views,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const likesData = {
    labels:"Likes analysis",
    datasets: [
      {
        label: 'Likes',
        data: performanceData.likes,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const engagementRateData = {
    labels: "Rate analysis",
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: performanceData.engagementRate,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const userscreentime = {
    labels:["week1","week2","week3","week4","week5","week6",'week7','week8'],
    datasets:[
      {
        label:"screentime",
        data:performanceData.averageuserscreentime,
        backgroundColor:"red",
        borderColor:"red",
        borderWidth: 1,
        fill: false
      }
    ]
  }
  const Preferencesdata= {
    labels:["sports","politics","entertainment","films"],
    datasets:[
      {
       label:"other",
       data:performanceData.Prefernces,
       backgroundColor:["blue","purple","yellow","orange"],
       borderColor:"white",
       borderWidth: 1
      }
    ]
  }
  return (
    <>
    <h2 className=' font-bold text-blue-950 text-xl'>News Feed Performance</h2>
    <div className=" flex justify-evenly">
      
      <div className="chart-container bg-slate-900  w-96 h-40">
        <Bar data={viewsData}  />
      </div>
      <div className="chart-containe w-96 bg-slate-900  h-40">
        <Bar data={likesData} />
      </div>
    </div>
    <h2 className=' font-bold text-blue-950 text-xl'>User traffic</h2>
    <div className=' flex justify-evenly'>
    <div className="chart-container bg-slate-900 w-96 h-40">
        <Line data={engagementRateData}  />
      </div> 
      <div className="chart-container  bg-slate-900 w-96 h-40">
        <Line data={userscreentime}   />
      </div>
    </div>
    <h2 className=' font-bold text-blue-950 text-xl'>User Preferences</h2>
    <div className=' flex justify-center'>
      <div className=' chart-container bg-slate-900  w-96 h-96'>
        <Pie data={Preferencesdata}/>
      </div>
    </div>
    </>
  );
}

export default NewsFeedPerformance;