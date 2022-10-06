

import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";



function Indexcomponent(){
    return(
        <div>
           
           
                
            <div className="">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" height = "500px" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Latest Technologies</h5>
                      <p className="text-center">Be aware about the latest Technologies.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" height = "500px" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Buy Products with less price </h5>
                      <p className="text-center">Knowledge is the key to success</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://codinginfinite.com/wp-content/uploads/2018/10/task-scheduler.png" className="d-block w-100" height = "500px" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="text-dark">Task Scheduler</h5>
                      <p className="text-dark text-center">Manage and Scheduler your taks</p>
                    </div>
                  </div>
                 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
           
        </div>
      
        
 


           
        
    )
}

export default Indexcomponent
