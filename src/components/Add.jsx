import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { saveVideoApi } from '../services/allAPIcalls';

const Add = ({setAddResponseFromHome}) => {

  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgUrl:"", youtubeLink:""
  })

  const [show, setShow] = useState(false);
  const [invalidUtubeLink, setInvalidUtubeLink] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkUtube = (userInputUtubeLink)=>{
    if(userInputUtubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputUtubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputUtubeLink.split("v=")[1].slice(0,11)
      setInvalidUtubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      
    }
    else{
      setInvalidUtubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink:""})
    }
  }

  const handleUploadVideo= async ()=>{
    // object destructring
    const {caption,imgUrl,youtubeLink} = videoDetails
    if(caption && imgUrl && youtubeLink){

      try{
        const result = await saveVideoApi(videoDetails)
        console.log(result);
        if (result.status >= 200 && result.status<300){
          alert("Video uploaded ")
            handleClose()

            setAddResponseFromHome(result)
          
        }
        else{
            console.log(result);
            
        }
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      alert("Please provide proper details")
    }
      
  }

  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>
            Upload New Video <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
        </h5>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <div className='border rounder p-3'>
       <FloatingLabel className='mb-3' controlId="floatingCaption" label="Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingCaption" label="Image URL">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails, imgUrl:e.target.value})} type="text" placeholder="Image URL" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingCaption" label="Youtube Link">
        <Form.Control onChange={e=>extractEmbedLinkUtube(e.target.value)}  type="text" placeholder="Video Caption" />
      </FloatingLabel>

      {
        invalidUtubeLink && 
        <div className='text-danger fw-bolder'>
            Invalid Youtube Link
        </div>
      }
       </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-warning' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add