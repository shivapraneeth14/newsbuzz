
import 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';

function NewsFeedPerformance() {
  const [performanceData, setPerformanceData] = useState({
    labels: [],
    views: [],
    likes: [],
    engagementRate: [],
  });

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/newsfeed-performance'); // Replace with your API endpoint
      const data = await response.json();
      setPerformanceData(data);
    };

    fetchData();
  }, []);

  const calculateEngagementRate = (views, likes) => {
    if (views === 0) return 0; 
    return ((likes / views) * 100).toFixed(2); 
  };

  const viewsData = {
    labels: performanceData.labels,
    datasets: [
      {
        label: 'Views',
        data: performanceData.views,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const likesData = {
    labels: performanceData.labels,
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
    labels: performanceData.labels,
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: performanceData.labels.map((_, i) =>
          calculateEngagementRate(performanceData.views[i], performanceData.likes[i])
        ),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="performance-container">
      <h2>News Feed Performance</h2>
      <div className="chart-container">
        <Bar data={viewsData} options={{ title: { text: 'Views' } }} />
      </div>
      <div className="chart-container">
        <Bar data={likesData} options={{ title: { text: 'Likes' } }} />
      </div>
      <div className="chart-container">
        <Line data={engagementRateData} options={{ title: { text: 'Engagement Rate' } }} />
      </div>
    </div>
  );
}

export default NewsFeedPerformance;

