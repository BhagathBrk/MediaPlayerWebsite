import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { deleteHistoryApi, getAllHistoryAPI } from '../services/allAPIcalls'

const History = () => {

const [allVideoHistory, setAllVideoHistory] = useState([])

useEffect(()=>{
  getAllHistory()
},[])

const getAllHistory = async ()=>{
  try {
    const result = await getAllHistoryAPI()
    if (result.status>=200 && result.status<300){
      setAllVideoHistory(result.data)
    }
    else{
      console.log(result);
      
    }
  } catch (error) {

    console.log(result);
    
    
  }
}

const removeHistory = async (id) =>{
  try {
    
    await deleteHistoryApi(id)
    getAllHistory()
    
  } catch (error) {

    console.log(error);
    
    
  }
}

  return (
    <div style={{paddingTop:'100px'}}>
      <div className="d-flex justify-content-between container ">
    <h3>Watch History</h3>

    <Link className='text-white' style={{textDecoration:'none'}} to='/home'>Back to Home</Link>

      </div>

    <table className='container my-5 table'>
    <thead>
      <tr>
        <th>#</th>
        <th>Caption</th>
        <th>Link</th>
        <th>TimeStamp</th>
        <th>...</th>
      </tr>
    </thead>

    <tbody>

 {allVideoHistory?.length>0?
 allVideoHistory?.map((videoDetails, index)=>(
  <tr key={videoDetails?.id}>
<td>{index+1}</td>
  <td>{videoDetails?.caption}</td>
  <td>{videoDetails?.youtubeLink}</td>
  <td>{videoDetails?.timeStamp}</td>
  <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
</tr>
 )):

 <div className='fw-bolder text-danger fs-5'>No History</div>

}

    </tbody>
    </table>

    </div>
  )
}

export default History