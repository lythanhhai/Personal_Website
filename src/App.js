import './App.css';
import './Css/homeCSS/home.css';
// font-awersome
import '@fortawesome/fontawesome-free/css/all.min.css';

// import route
import { BrowserRouter , Route, Link, Redirect, Routes } from 'react-router-dom';

// import component
import Main from './Components/Main';
import Choose from './Components/Choose';
import Porfolio from './Components/Porfolio';
import DetailProject from './Components/DetailProject';
import ContactMe from './Components/Contact';

// import data
import data from './Api/api';

import { useState, useEffect } from 'react';

function App() {
  // get index project 
  const [index, setIndex] = useState(0);


  const getIndexProject = (indexRef) => {
    //index = indexRef;
    setIndex(indexRef);  
    //localStorage.setItem("index", indexRef);
  }

  // useEffect(() => {
  //   localStorage.setItem("index", index);
  // }, []);

  //Componentsst index__reload = localStorage.getItem("index");

  return (
    <BrowserRouter>
      <div className="App">
          <div className="App__home">
              <Routes>
                <Route path="" element={
                  <Main />
                } />
                <Route path="/Navbar" element={
                  <Choose />
                } />
                <Route path="/Porfolio" element={
                  <Porfolio data={data} getIndexProject={getIndexProject}/>
                }></Route>
                <Route path="/Porfolio/DetailProject" element={
                  <DetailProject data={data[index]}/>
                }></Route>
                <Route 
                  path="/Contact" element={
                    <ContactMe />
                  }
                />
              </Routes>
          </div>
          
          <div className="App__div1"></div>
          <div className="App__div2"></div>
          <div className="App__div3"></div>
          <div className="App__div4"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
