import React, { Component } from 'react';
import * as axios from 'axios';

export class Mytaskscomponent extends Component {
  constructor(props){
    super(props);
  
    // Initializing the state 
    this.state = { mytask: [] };
  }
//  componentDidMount(){
//     axios({
//         method : 'get',
//         url : "http://127.0.0.1:8000/alltask/"
        
      
//     }).then((response)=>{
//         console.log(response)
   

//     })
//   }
  render() {
    return (
      <div className="container">
       <h1>TASKS</h1>
        <div className="row">
            <div className="col-3">
                <div className="card" style={{"width": "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
            </div>
            <div className="col-3">
                <div className="card" style={{"width": "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
            </div>
            <div className="col-3">
                <div className="card" style={{"width": "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
            </div>
            <div className="col-3">
                <div className="card" style={{"width": "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
            </div>
       

        
        
        </div>
            
      </div>
    )
  }
}

export default Mytaskscomponent
