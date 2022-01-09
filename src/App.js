import './App.css';
import './Css/homeCSS/home.css';
// font-awersome
import '@fortawesome/fontawesome-free/css/all.min.css';

// import route
import { BrowserRouter , Route, Link, Redirect, Routes } from 'react-router-dom';

// import component
import Main from './Components/Main';
import Choose from './Components/Choose';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div className="App__home">
              <Routes>
                <Route path="/Home" element={
                  <Main />
                } />
                <Route path="/Navbar" element={
                  <Choose />
                } />
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
