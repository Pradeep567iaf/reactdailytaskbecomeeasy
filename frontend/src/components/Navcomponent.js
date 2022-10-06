

import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";



function Navcomponent(){
    return(
        <div>
           
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TECHNOFY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/phones">SMART PHONES</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/laptops">LAPTOPS</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/taskschedule">TASK SCHEDULER</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/file_converter">FILE CONVERTER</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/my_tasks">MY TASKS</Link>
                        </li>
                       
                    </ul>
                    <span className="navbar-text">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
        )}
export default Navcomponent;