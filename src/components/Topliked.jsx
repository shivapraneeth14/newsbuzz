import React from 'react'
import Data from './Data'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Topliked() {
    const navigate = useNavigate()
    const [topliked,settopliked] = useState([])
 useEffect(()=>{
    const fetchData = async()=>{
       try {
         const data = await Data()
         console.log(data)
         settopliked(data.articles)
       } catch (error) {
        console.log(error)
        
       }
    }
    fetchData()
 })
  return (
    <div> topliked
       <div className='flex  justify-evenly flex-wrap' style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
        {topliked && topliked.map((article,index)=>(
            <div className=' w-60 mb-2 h-64 flex-none mr-2 bg-blue-400 ' key={index}>
             <img className=' w-60 h-1/3 object-contain' src={article.urlToImage	} alt="" />
             <h1 className=' font-bold text-xs'>{article.title}</h1>
             <h5 className=' text-xs'>{article.description}</h5>
            </div>
        ))}
      
    </div>
    </div>
  )
}

export default Topliked
