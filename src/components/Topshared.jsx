import React from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Topshared() {
   
    const [Topshared,settopshared] = useState([])
 useEffect(()=>{
    const fetchData = async()=>{
       try {
         const data = await Data()
         console.log(data)
        settopshared(data.articles)
       } catch (error) {
        console.log(error)
        
       }
    }
    fetchData()
 })
  return (
    <div>
      <div className=' font-bold text-xl text-blue-950'>Top shared</div>
       <div className='flex  justify-evenly flex-wrap' style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
        {Topshared && Topshared.map((article,index)=>(
            <div className=' w-60 mb-2 h-64 rounded-e-xl flex-none mr-2 bg-orange-500 ' key={index}>
             <img className=' w-60 h-1/3 object-contain' src={article.urlToImage	} alt="" />
             <h1 className=' font-bold  text-xs'>{article.title}</h1>
             <h5 className=' text-white text-xs'>{article.description}</h5>
            </div>
        ))}
      
    </div>
    </div>
  )
}

export default Topshared
