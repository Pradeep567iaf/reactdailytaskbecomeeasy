import React, { Component } from 'react'
import PropTypes from 'prop-types'
function  Fileconvertercomponent()  {
  


    return (
      <div>
      <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              
              <div class="card">
                  <h5 class="text-center mb-4">FILE CONVERTER</h5>
                  <form class="form-card" onsubmit="event.preventDefault()">
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Easy Way to Convert Your File with Security </label>
                    <input class="form-control" type="file" id="formFile"/>
                   </div>
                   <select class="form-select" aria-label="Default select example">
                        <option selected>Select File Format</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                      <div class="row justify-content-end mt-4">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-outline-primary">CONVERT FILE</button> </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
  </div>

      
      
  
        
      </div>
    )
  
}

export default Fileconvertercomponent
