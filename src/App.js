import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import EmptListing from './EmptListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmptListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate/>}></Route>
          <Route path='/employe/edit/:empid' element={<EmpEdit />}></Route>
          <Route path='/employe/detail/:empid' element={<EmpDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;