import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newstud from './Newstud';
import Signin from './Signin';
import Signup from './Signup';
import './stud.css';
import Nav from './Nav';
import Updatestud from './Updatestud';
import Studlist from './Studlist';
import Footer from './Footer';
function App() {
  return (

<>
      <div className="App">
      <BrowserRouter>
      <Nav/>
      
        <Routes>
              <Route path="/" element={<Newstud/>} />

              <Route path="/Signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Newstud" element={<Newstud/>} />
              <Route path="/Updatestud/:id" element={<Updatestud/>}/>
              <Route path="/Studlist" element={<Studlist/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
      

</>

   
  );
}

export default App;
