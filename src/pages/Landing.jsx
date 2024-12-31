// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/Up2T.gif'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container '>
      {/* Landing */}
      <div className="row align-items-center">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
        <Link to = {'/home'} className='btn btn-info'>Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img src= {landingImg} className='img-fluid' alt="" />
      </div>
      </div>

    {/* features */}

    <div className="text-center my-5"><h3>Features</h3>
      <div className="row mt-5">

      <div className="col-lg-4">

      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img1} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Bass Boosted</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>

      <div className="col-lg-4">

      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img2} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Electric Guitar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>

      <div className="col-lg-4">

      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img3} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>Live Concert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>

      </div>
    </div>

    {/* last section */}

    <div className="row my-5 align-items-center border rounded p-5">

    <div className="col-lg-5">

      <h3 className="text-warning mb-4">Simple, Fast and Powerful</h3>

      <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet exercitationem aspernatur voluptate quam dolore rerum est deserunt similique nulla facere dicta molestiae debitis, iste, quidem enim quia, blanditiis fuga.</p>

      <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Categorise Videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet exercitationem aspernatur voluptate quam dolore rerum est deserunt similique nulla facere dicta molestiae debitis, iste, quidem enim quia, blanditiis fuga.</p>

      <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Managing History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet exercitationem aspernatur voluptate quam dolore rerum est deserunt similique nulla facere dicta molestiae debitis, iste, quidem enim quia, blanditiis fuga.</p>

    </div>
    <div className="col"></div>
    <div className="col-lg-6">

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/O4irXQhgMqg?si=8420gX2FRIFaVmou" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

    </div>

    </div>
    
    </div>
  )
}

export default Landing