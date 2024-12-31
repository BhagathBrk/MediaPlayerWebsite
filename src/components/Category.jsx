import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { deleteCategoryApi, getAllCategoryApi, removeVideoApi, saveCategoryApi, updateCategoryApi } from '../services/allAPIcalls';
import VideoCard from './VideoCard';

const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

  const [allCategories, setAllCategories] = useState([])

  const [categoryName, setCategoryName] = useState("")

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  const handleSaveCategory = async ()=>{
    if(categoryName){

      const categoryDetails = {categoryName, allVideos:[]}

      try {

        const result = await saveCategoryApi(categoryDetails)
        alert("Category Created")
        getAllCategories()
        handleClose()
        
      } catch (error) {
        console.log(error);
        
        
      }

    }
    else
    {
      alert("please provide category name")
    }
  }

  const getAllCategories = async ()=>{
    try{

      const result = await getAllCategoryApi()
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)
      }
      
    } catch (error) {
      console.log(error);
      
      
    }
  }

const removeCategory = async (id)=>{
  try {
    await deleteCategoryApi(id)
    getAllCategories()

  } catch (error) {
    console.log(error);
    
    
  }
}

const dragOverCategory =(e)=>{
  e.preventDefault()
}

const videoCardDropOverCategory = async (e, categoryDetails)=>{

 const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))

 categoryDetails.allVideos.push(videoDetails)

await updateCategoryApi(categoryDetails)
getAllCategories()

const result = await removeVideoApi(videoDetails?.id)

setDeleteResponseFromCategory(result)

}

const categoryVideoDragStarted = (e, dragVideoDetails, categoryDetails)=>{
  let dragData = {video: dragVideoDetails, categoryDetails}

  e.dataTransfer.setData("dragData", JSON.stringify(dragData))
}

  return (
    <>
    <div className='d-flex align-items-center justify-content-between mb-3'>
      <h3>
        All categories
      </h3>
      <button onClick={handleShow} className="btn btn-info ms-3 rounded-circle fw-bolder fs-5">+</button>
    </div>

<div className="container-fluid mb-3">
{/* single Category */}
{
  allCategories?.length>0 ? 

allCategories?.map(categoryDetails=>(

  <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e, categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
  <div className="d-flex justify-content-between">
    <h5>{categoryDetails?.categoryName}</h5>
    <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn '><i class="fa-solid fa-trash text-danger"></i></button>
  </div>
  
    {/* display category videos */}
  <div className="row mt-2">

   {
    categoryDetails?.allVideos?.length>0 &&
    categoryDetails?.allVideos?.map(video=>(
      <div key={video?.id} draggable={true} onDragStart={e=> categoryVideoDragStarted(e, video, categoryDetails)} className="col-lg-4">
      {/* video cards */}
      <VideoCard insideCategory={true} displayData={video}/>
    </div>
    ))
   }

  </div>
</div>
))

  :
  <div className='fw-bolder text-danger fs-5'>No Category added</div>
}

</div>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='border rounder p-3'>
       <FloatingLabel controlId="floatingCaption" label="Category Name">
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

</>
    
  )
}

export default Category