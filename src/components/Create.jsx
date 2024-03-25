import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full md:w-3/4 lg:w-1/2 mt-5 mb-5 px-4 pt-4 h-auto bg-slate-500'>
        <div className='flex flex-col items-center justify-evenly'>
          <div className='flex mt-4'>
            <p className='font-bold mr-5'>Title</p>
            <input 
              onChange={(e) => setTitle(e.target.value)}
              className='ml-4 rounded-lg mb-3 w-44' 
              type="text" 
            />
          </div>
          <div className='flex mt-4'>
            <p className='font-bold mr-2'>Category</p>
            <input
              onChange={(e) => setCategory(e.target.value)}
              className='rounded-lg mb-3 w-44' 
              type="text" 
            />
          </div>
          <div className='flex mt-4'>
            <p className='font-bold mr-2'>Content</p>
            <input
              onChange={(e) => setContent(e.target.value)}
              className='rounded-lg mb-3 w-44' 
              type="text" 
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex mt-4'>
              <p className='font-bold mr-2'>Image URL</p>
              <input
                onChange={(e) => setUrl(e.target.value)}
                className='rounded-lg mb-3 w-44' 
                type="text" 
              />
            </div>
            <p>Or</p>
            <input className='ml-12' type="file" name="" id="" />
            <button className='mt-3 w-16 rounded-md font-bold text-black bg-white'>Create</button>
          </div>
        </div>
      </div>
      <div className='w-full md:w-3/4 lg:w-1/2 mt-5 mb-5 h-72 bg-gray-700'>
        <p className= 'font-bold text-white mt-1'>Preview</p>
        <div className='pt-5 flex justify-center items-center flex-col'>
          <div className='pt-5 w-56 md:w-64 lg:w-72 h-32 bg-white overflow-hidden'>
            <img className='object-cover w-full h-full' src={url} alt="" />
          </div>
        </div>
        <p className='text-white font-bold text-center w-full'>{title}</p>
        <div className='text-white w-full text-center' >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Create;


