import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosApi, saveVideoApi, updateCategoryApi } from '../services/allAPIcalls'
import { useEffect } from "react"


const View = ({addResponseFromHome, deleteResponseFromCategory, setDeleteResponseFromView}) => {

  const [deleteVideoResponseFromVideoCard, setDeleteVideoResponseFromVideoCard] = useState("")
  
  const [allVideos, setAllVideos] = useState([])

  useEffect(()=>{

    getAllVideos()

  },[addResponseFromHome,deleteResponseFromCategory , deleteVideoResponseFromVideoCard])

  console.log(allVideos);
  

const getAllVideos = async () =>{
  try {

    const result = await getAllVideosApi()
    console.log(result);
    if (result.status>=200 && result.status<300){
      setAllVideos(result.data);
      
    }

    else{
      console.log("Api call failed");
      
    }
    
    
  } catch (err) {

    console.log(err);
    
    
  }
}

const dragOverView =(e)=>{
  e.preventDefault()
}

const categoryVideoDragOverView = async (e)=>{
const {video, categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))

const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)

const updateCategory = {...categoryDetails, allVideos:updatedCategoryVideoList}
console.log(updateCategory);

// updating the category by delete video from category

const result = await  updateCategoryApi(updateCategory)
// use state lifting to communicate data from view to category

setDeleteResponseFromView(result)
// use api to upload video 
await saveVideoApi (video)
// call getAllVideos function

getAllVideos()


}

  return (
    <>

    <Row droppable="true" onDragOver={dragOverView} onDrop={e=> categoryVideoDragOverView(e)}>
     {
      allVideos?.length>0?
      allVideos.map(video=>(
        <Col key={video?.id} className='mb-2' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponseFromVideoCard = {setDeleteVideoResponseFromVideoCard} displayData ={video}/>
        </Col>
      ))
      :
    
      <div className='fw-bolder text-danger fs-5'>No videos are uploaded</div>

    }
    
    </Row>


    </>
  )
}

export default View
// 