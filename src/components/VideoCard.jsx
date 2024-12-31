import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoApi, saveHistoryAPI } from '../services/allAPIcalls';

const VideoCard = ({displayData, insideCategory, setDeleteVideoResponseFromVideoCard}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    
    setShow(true);
    const {caption, youtubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US', {timeZoneName: 'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName: 'short'})
    const historyDetails = {caption, youtubeLink, timeStamp}

    try {
      await saveHistoryAPI(historyDetails)
      
    } catch (error) {

      console.log(error);
      
      
    }

    
  }

  const deleteVideo = async (id) =>{
    try {

      const result = await removeVideoApi(id)
      setDeleteVideoResponseFromVideoCard(result)
      
    } catch (error) {
      console.log(error);
      
      
    }
  } 

  const VideoCardDragStarted = (e, dragVideoDetails)=>{
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails))
  }

  return (
    <>
    <Card draggable={true} onDragStart={e=> VideoCardDragStarted(e, displayData)} className='mt-3 ' style={{ width: '12rem' }}>
      <Card.Img style={{height:'200px'}} onClick={handleShow} variant="top" src={displayData?.imgUrl} />
      <Card.Body>
       
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {!insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn '><i class="fa-solid fa-trash text-danger"></i></button>
        }
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400px" src={`${displayData?.youtubeLink}?autoplay=1`} title="ONE PIECE | Official Trailer | Netflix"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard