import React from 'react';

function Home() {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly'>
      <div className='w-full lg:w-2/5 rounded-xl mt-5 mb-5 lg:mr-5 bg-orange-700 lg:h-96'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-3/4 lg:w-3/5 mt-24 h-14 font-bold text-5xl text-white'>News2Day</div>
          <div className='ml-4 lg:ml-20 text-xs text-white font-light'>Discover your neighbourhood</div>
        </div>
        <div className='flex flex-col mt-8 lg:mt-0 justify-evenly items-center'>
          <div className='text-white font-bold'>Create Feed</div>
          <div className='text-white font-bold'>Manage Your news</div>
          <div className='text-white font-bold'>Performance analysis</div>
        </div>
      </div>
      <div className='w-full lg:w-2/5 rounded-e-lg mt-5 mb-5 lg:ml-5 bg-slate-700 h-96 lg:h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-3/4 lg:w-3/5 mt-24 h-14 font-bold text-7xl text-white'>24/7</div>
          <div className='ml-4 lg:ml-20 mt-6 text-xs text-white font-light'>Navigates you to world</div>
        </div>
        <div className='w-3/4 lg:w-3/5 ml-4 lg:ml-24 mt-11 bg-white h-48 rounded-lg'>
          <img className='object-contain' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;