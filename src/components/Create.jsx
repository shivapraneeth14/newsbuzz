import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addnews } from './Redux/Slice';
import { useEffect } from 'react';
import { useRef } from 'react';

function Create() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const dispatch =useDispatch()
  const formref = useRef(null)



  const createnews =(e)=>{
    e.preventDefault()
    console.log("seding")
    console.log(title)
    dispatch(addnews({title,content,imageurl:url}))
    setTitle("")
    setUrl("")
    setContent("")
    formref.current.reset()
  }

  return (
    <div className='flex  flex-col lg:flex-row  items-center justify-evenly'>
      <div className=' mt-3  px-4 pt-4 h-auto  bg-neutral-600 '>
        <div className='flex  flex-col items-center justify-evenly'>
          <form action="submit" ref={formref} onSubmit={createnews}>
          <div className='flex mt-4'>
          
            <p className='font-bold mr-5'>Title</p>
            <input 
            required
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
            required
              onChange={(e) => setContent(e.target.value)}
              className='rounded-lg mb-3 w-44' 
              type="text" 
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex mt-4'>
              <p className='font-bold mr-2'>Image URL</p>
              <input
              required
                onChange={(e) => setUrl(e.target.value)}
                className='rounded-lg mb-3 w-44' 
                type="text" 
              />
            </div>
            <p>Or</p>
            <input
            accept="image/*" 
             className='ml-12' type="file" name="" id="" />
            <button className='mt-3 w-16 rounded-md font-bold text-black bg-white'>Create</button>
          </div>
          </form>
        </div>
      </div>
      <div className=' w-64 mt-5 lg:mt-3 min-h-72 bg-gray-700'>
        <p className= 'font-bold  text-white mt-5 '>Preview</p>
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


