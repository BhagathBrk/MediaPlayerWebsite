import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from "react-router-dom"
import Category from '../components/Category'
import View from '../components/View'



const Home = () => {

  const [deleteResponseFromCategory, setDeleteResponseFromCategory] = useState("")

  const [addResponseFromHome, setAddResponseFromHome] = useState("")

  const [deleteResponseFromView, setDeleteResponseFromView] = useState("") 

  return (
    <div style={{paddingTop:"100px"}} className='container'>

        <div className="d-flex justify-content-between container mb-5">

          <Add setAddResponseFromHome={setAddResponseFromHome}/>
          <Link style={{textDecoration:'none'}} className='text-white' to={'/history'}>Watch History</Link>

        </div>

        <div className="container-fluid my-5 row">

        <div className="col-lg-6">

          <h2>All Videos</h2>
        <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome = {addResponseFromHome}/>
        </div>

        <div className="col-lg-6">
        <Category deleteResponseFromView ={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>
        
        </div>

    </div>
  )
}

export default Home