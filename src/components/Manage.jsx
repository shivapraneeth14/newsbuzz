import React, { useEffect, useState } from 'react'
import Data from './Data';

function Manage() {
  const [manageddata,setmanageddata] = useState([])

  useEffect(()=>{
    const fetchdata= async ()=>{
      try {
        const data =await  Data()
        console.log(data)
        setmanageddata(data.articles
          )
      } catch (error) {
       console.log(error)
      }
   
     }
     fetchdata()

  },[])

  const deleteddata =(id)=>{
    console.log(id)
    const updateddata = [...manageddata]
    updateddata.splice(id,1)
    console.log("updated data",updateddata)
    setmanageddata(updateddata)
  }
 
  

  return (
    <div className='flex justify-center'>
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Creation Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody> 
            {manageddata && manageddata.map((item, index) => (
              <tr key={index}>
                <td>{item.source.name
}</td>
                <td>{item.category}</td>
                <td>{item.publishedAt}</td>
                <td>{item.status}</td>
                <td onClick={() => deleteddata(index)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;