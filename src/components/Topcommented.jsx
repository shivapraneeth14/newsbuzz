import React, { useEffect, useState } from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Topcommented() {
    const navigate = useNavigate()
    const [topcommented,settopcommented] = useState([])
 useEffect(()=>{
    const fetchData = async()=>{
       try {
         const data = await Data()
         console.log(data)
         settopcommented(data.articles)
       } catch (error) {
        console.log(error)
        
       }
    }
    fetchData()
 })

  return (
    <>
    <div className=' font-bold text-xl text-blue-950'>Topcommented</div>
  
    <div className='flex  justify-evenly flex-wrap' style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
        {topcommented && topcommented.map((article,index)=>(
            <div className=' w-60  mb-2 rounded-xl h-64  bg-red-600 flex-none mr-2   ' key={index}>
             <img className=' w-60 h-1/3 object-contain' src={article.urlToImage	} alt="" />
             <h1 className=' font-bold text-xs '>{article.title}</h1>
             <h5 className=' text-white text-xs'>{article.description}</h5>
            </div>
        ))}
      
    </div>
    </>
  )

}

export default Topcommented


