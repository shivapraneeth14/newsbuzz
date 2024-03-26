import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className='flex  items-center justify-evenly'>
      <div className=' mt-3  px-4 pt-4 h-auto  bg-neutral-600 '>
        <div className='flex  flex-col items-center justify-evenly'>
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
            <input
            accept="image/*" required
             className='ml-12' type="file" name="" id="" />
            <button className='mt-3 w-16 rounded-md font-bold text-black bg-white'>Create</button>
          </div>
        </div>
      </div>
      <div className=' w-64  min-h-72 bg-gray-700'>
        <p className= 'font-bold text-white mt-1'>Preview</p>
        <div className='pt-5 flex justify-center items-center flex-col'>
          <div className=' w-48 h-28 bg-white overflow-hidden'>
            <img className='object-cove w-48 h-full' src={url} alt="" />
          </div>
        </div>
        <p className='text-black font-bold overflow-hidden  text-center w-full'>{title}</p>
        <div className=' flex justify-center'>
        <div className=' mb-2 text-white w-44 whitespace-normal text-wrap h-auto overflow-hidden text-center'style={{ whiteSpace: 'pre-wrap' }} >
          {content}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Create;


