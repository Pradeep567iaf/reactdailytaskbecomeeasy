
import './App.css';
import ReactDOM from 'react-dom';  
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 

import Mobilecomponent from './components/Mobilecomponent';
import Indexcomponent from './components/Indexcomponent';
import Navcomponent from './components/Navcomponent';
import Footercomponent from './components/Footercomponent';
import Laptopcomponent from  './components/Laptopcomponent';
import Taskscheduler from './components/Taskscheduler';
import Fileconvertercomponent from './components/Fileconvertercomponent';
import Mytaskscomponent from './components/Mytaskscomponent';


function App() {
  return (


    <BrowserRouter>
    <div className="App">
       <Navcomponent/>
      
      <Routes>
          <Route exact path="/" element={<Indexcomponent/>}/>
          <Route exact path="/home" element={<Indexcomponent/>}/>
          <Route exact path="/phones" element={<Mobilecomponent/>}/>
          <Route exact path="/laptops" element={<Laptopcomponent/>}/>
          <Route exact path="/taskschedule" element={<Taskscheduler/>}/>
          <Route exact path="/file_converter" element={<Fileconvertercomponent/>}/>
          <Route exact path="/my_tasks" element={<Mytaskscomponent/>}/>


          
        
    </Routes>
    <Footercomponent/>
</div>
</BrowserRouter>
   
  );
}

export default App;
